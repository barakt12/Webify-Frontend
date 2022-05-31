import { templateService } from '../../services/templates.service'
import { wapService } from '../../services/wap-service.js'
// import { userService } from '../../services/user.service'
import { v4 as uuidv4 } from 'uuid'

export const setSelectedElement = (cmp) => {
  return (dispatch) => {
    dispatch({ type: 'SET_ELEMENT', cmp })
  }
}

export const deleteElement = (cmp) => {
  return async (dispatch, getState) => {
    // gets wap from state to pass to service function
    let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
    if (wap && cmp) {
      wapService.deleteCmp(wap, cmp.id)
      await dispatch(updateWap(wap))
      wapService.saveToDraft(wap)
    }
  }
}

export const duplicateElement = (cmp) => {
  return async (dispatch, getState) => {
    let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
    const duplicateCmp = JSON.parse(JSON.stringify(cmp))
    duplicateCmp.id = uuidv4()
    wapService.duplicateCmp(wap, duplicateCmp, cmp.id)
    await dispatch(updateWap(wap))
    wapService.saveToDraft(wap)
  }
}

export const setWap = (wap) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: 'SET_WAP', wap })
      wapService.saveToDraft(wap)
    } catch (err) {
      throw err
    }
  }
}

export const updateCmp = (updatedCmp) => {
  return async (dispatch, getState) => {
    try {
      let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
      wapService.updateCmp(wap, updatedCmp)
      await dispatch({ type: 'UPDATE_WAP', wap })
    } catch (err) {
      throw err
    }
  }
}

export const updateWap = (wap) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'UPDATE_WAP', wap })
      await wapService.saveToDraft(wap)
    } catch (err) {
      throw err
    }
  }
}

export const loadTemplate = (id) => {
  return async (dispatch) => {
    try {
      let wap = templateService.getTemplateById(id)
      const wapCopy = JSON.parse(JSON.stringify(wap))
      delete wapCopy._id
      await wapService.saveToDraft(wapCopy)
      dispatch({ type: 'SET_WAP', wap: wapCopy })
    } catch (err) {
      throw err
    }
  }
}

export const setDisplaySize = (displaySize) => {
  return (dispatch) => {
    dispatch({ type: 'SET_DISPLAY_SIZE', displaySize })
  }
}

export const undoWap = () => {
  return async (dispatch, getState) => {
    try {
      const history = JSON.parse(JSON.stringify(getState().wapModule.history))
      if (history.length) {
        let lastWapState = history.pop()
        wapService.saveToDraft(lastWapState)
        dispatch({ type: 'UNDO_WAP', wap: lastWapState, history })
      }
    } catch (err) {
      throw err
    }
  }
}

export const saveWap = () => {
  return async (dispatch, getState) => {
    try {
      const wapToSave = getState().wapModule.wap
      const user = getState().userModule.user
      wapToSave.createdBy = user.email
      const wapWithId = await wapService.save(wapToSave, user)
      dispatch({ type: 'SET_WAP', wap: wapWithId })
    } catch (err) {
      throw err
    }
  }
}

export const deleteWap = (wapId) => {
  return async (dispatch, getState) => {
    try {
      await wapService.remove(wapId)
      dispatch({ type: 'REMOVE_WAP', wapId })
    } catch (err) {
      throw err
    }
  }
}

export const setWapThumbnail = (imgData) => {
  return (dispatch) => {
    dispatch({ type: 'SET_THUMBNAIL', imgData })
  }
}

export const loadSavedWaps = () => {
  return async (dispatch) => {
    try {
      const savedWaps = await wapService.query()
      dispatch({ type: 'SET_SAVED_WAPS', savedWaps })
    } catch (err) {
      throw err
    }
  }
}

export const selectWap = (id) => {
  return async (dispatch, getState) => {
    try {
      const selectedWap = getState().wapModule.savedWaps.find(
        (wap) => wap._id === id
      )
      dispatch({ type: 'SET_WAP', wap: selectedWap })
    } catch (err) {}
  }
}
