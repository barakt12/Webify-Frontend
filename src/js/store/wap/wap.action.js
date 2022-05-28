import { templateService } from '../../services/templates.service'
import { wapService } from '../../services/wap-service.js'

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
    }
  }
}

export const setWap = (wap) => {
  return (dispatch) => {
    try {
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
    return cmpsList[cmp.category] ? cmpsList[cmp.category].push(cmp) : (cmpsList[cmp.category] = [cmp])
  })
}

export const loadTemplate = (id) => {
  return async (dispatch) => {
    try {
      const wap = templateService.getTemplateById(id)
      dispatch({ type: 'SET_WAP', wap })
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
      const wapToSave = await wapService.save(getState().wapModule.wap)
      console.log(wapToSave)
      dispatch({ type: 'SET_WAP', wap: wapToSave })
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
