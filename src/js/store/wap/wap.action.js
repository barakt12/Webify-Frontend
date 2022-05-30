import { templateService } from '../../services/templates.service'
import { wapService } from '../../services/wap-service.js'
import { userService } from '../../services/user.service'
import { v4 as uuidv4 } from 'uuid'

export const setSelectedElement = (cmp) => {
  return (dispatch) => {
    dispatch({ type: 'SET_ELEMENT', cmp })
  }
}

export const deleteElement = (cmp) => {
  return (dispatch, getState) => {
    let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
    if (wap && cmp) {
      wapService.deleteCmp(wap, cmp.id)
      dispatch({ type: 'SET_WAP', wap })
      wapService.saveToDraft(wap)
    }
  }
}

export const setWap = (wap) => {
  return async (dispatch) => {
    try {
      await wapService.saveToDraft(wap)
      dispatch({ type: 'SET_WAP', wap })
    } catch (err) {
      console.log(err)
    }
  }
}

export const loadCmps = () => {
  const cmpsList = {}
  const cmps = templateService.getCmps()
  cmps.forEach((cmp) => {
    return cmpsList[cmp.category]
      ? cmpsList[cmp.category].push(cmp)
      : (cmpsList[cmp.category] = [cmp])
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
      const user = getState().userModule.user
      const updatedUser = await wapService.remove(wapId)
      console.log(updatedUser)
      dispatch({ type: 'SET_USER', user: updatedUser })
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
  return async (dispatch) => {
    try {
      const selectedWap = await wapService.getById(id)
      console.log('asdasd', selectedWap)
      dispatch({ type: 'SET_WAP', wap: selectedWap })
    } catch (err) {}
  }
}
