import { templateService } from '../../services/templates.service'
import { wapService } from '../../services/wap-service.js'
import { userService } from '../../services/user.service'
import { v4 as uuidv4 } from 'uuid'
import { isEqual } from 'lodash'
export const setSelectedElement = (cmp) => {
  return (dispatch) => {
    dispatch({ type: 'SET_ELEMENT', cmp })
  }
}

export const deleteElement = (cmp) => {
  return async (dispatch, getState) => {
    let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
    if (wap && cmp) {
      await wapService.deleteCmp(wap, cmp.id)
      dispatch({ type: 'SET_WAP', wap })
      wapService.saveToDraft(wap)
    }
  }
}

export const duplicateElement = (cmp) => {
  return async (dispatch, getState) => {
    let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
    const duplicateCmp = JSON.parse(JSON.stringify(cmp))
    duplicateCmp.id = uuidv4()
    await wapService.duplicateCmp(wap, duplicateCmp, cmp.id)
    dispatch({ type: 'SET_WAP', wap })
    wapService.saveToDraft(wap)
  }
}

export const setWap = (wap) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_WAP', wap })
      await wapService.saveToDraft(wap)
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateWap = (wap) => {
  return async (dispatch, getState) => {
    try {
      console.log('update')
      const lastWapState = JSON.parse(JSON.stringify(getState().wapModule.wap))
      // const history = JSON.parse(JSON.stringify(getState().wapModule.history))
      dispatch({ type: 'UPDATE_WAP', wap, lastWapState })
      await wapService.saveToDraft(wap)
    } catch (err) {
      console.log(err)
    }
  }
}



export const loadCmps = () => {
  const cmpsList = {}
  const cmps = templateService.getCmps()
  cmps.forEach((cmp) => {
    return cmpsList[cmp.category] ? cmpsList[cmp.category].push(cmp) : (cmpsList[cmp.category] = [cmp])
  })
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
      console.log(err)
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

        dispatch({ type: 'UNDO_WAP', wap: lastWapState, history })
        wapService.saveToDraft(lastWapState)
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const saveWap = () => {
  return async (dispatch, getState) => {
    try {
      const wapToSave = getState().wapModule.wap
      const user = getState().userModule.user
      wapToSave.createdBy = user.username
      const wapWithId = await wapService.save(wapToSave, user)
      dispatch({ type: 'SET_WAP', wap: wapWithId })
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteWap = (wapId) => {
  return async (dispatch, getState) => {
    try {
      await wapService.remove(wapId)
      dispatch({ type: 'REMOVE_WAP', wapId })
    } catch (err) {
      console.log(err)
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
      console.log(err)
    }
  }
}

export const selectWap = (id) => {
  return async (dispatch, getState) => {
    try {
      const selectedWap = getState().wapModule.savedWaps.find((wap) => wap._id === id)
      dispatch({ type: 'SET_WAP', wap: selectedWap })
    } catch (err) {}
  }
}
