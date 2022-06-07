import { templateService } from '../../services/templates.service'
import { wapService } from '../../services/wap-service.js'
import { socketService } from '../../services/socket.service'

export const setSelectedCmp = (cmp) => {
  return (dispatch) => {
    dispatch({ type: 'SET_CMP', cmp })
  }
}

export const deleteCmp = (cmp) => {
  return async (dispatch, getState) => {
    let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
    if (wap && cmp) {
      wapService.findCmp(wap, cmp, wapService.deleteCmp)
      await dispatch(updateWap(wap))
    }
  }
}

export const duplicateCmp = (cmp) => {
  return async (dispatch, getState) => {
    let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
    wapService.findCmp(wap, cmp, wapService.duplicateCmp)
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
      console.log(getState().wapModule.wap)
      let wap = JSON.parse(JSON.stringify(getState().wapModule.wap))
      wapService.findCmp(wap, updatedCmp, wapService.updateCmp)
      wapService.saveToDraft(wap)
      await dispatch({ type: 'UPDATE_WAP', wap })
      await wapService.saveToDraft(wap)
      socketService.emit('wap update', wap)
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
      socketService.emit('wap update', wap)
    } catch (err) {
      throw err
    }
  }
}

export const loadTemplate = (id) => {
  return (dispatch) => {
    try {
      if (id === 'blank') {
        dispatch({ type: 'SET_WAP', wap: { cmps: [] } })
        wapService.saveToDraft({ cmps: [] })
        return
      }
      let wap = templateService.getTemplateById(id)
      const wapCopy = JSON.parse(JSON.stringify(wap))
      delete wapCopy._id
      wapService.saveToDraft(wapCopy)
      dispatch({ type: 'SET_WORKING_STATE', isCollabMode: false })
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

export const saveToHistory = () => {
  return (dispatch) => {
    dispatch({ type: 'SAVE_HISTORY' })
  }
}

export const undoWap = () => {
  return async (dispatch, getState) => {
    try {
      const history = JSON.parse(JSON.stringify(getState().wapModule.history))
      if (history.length < 2) return
      history.pop()
      const lastWapState = history[history.length - 1]
      wapService.saveToDraft(lastWapState)
      dispatch({ type: 'UNDO_WAP', wap: lastWapState, history })
      socketService.emit('wap update', lastWapState)
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
      const selectedWap = getState().wapModule.savedWaps.find((wap) => wap._id === id)
      dispatch({ type: 'SET_WAP', wap: selectedWap })
    } catch (err) {}
  }
}

export const setCollabMode = (isCollabMode) => {
  return (dispatch) => {
    try {
      dispatch({ type: 'SET_WORKING_STATE', isCollabMode })
    } catch (err) {
      console.log(err)
    }
  }
}

export const publishWap = (id) => {
  return async (dispatch, getState) => {
    try {
      const wap = id ? getState().wapModule.savedWaps.find((wap) => wap._id === id) : getState().wapModule.wap
      const user = getState().userModule.user
      if (!user) {
        throw new Error('You have to login to publish')
      }

      wap.createdBy = user.email
      const publishedWap = await wapService.publishWap(wap)
      window.open(`/publish/${publishedWap._id}`, '_blank')
      dispatch({ type: 'SET_WAP', wap: publishedWap })
    } catch (err) {
      throw err
    }
  }
}
