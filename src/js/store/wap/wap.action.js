import { templateService } from '../../services/templates.service'
import { wapService } from '../../services/wap-service.js'

export const setSelectedElement = (cmp) => {
  console.log(cmp)
  return (dispatch) => {
    dispatch({ type: 'SET_ELEMENT', cmp })
  }
}

export const deleteElement = (cmp) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_ELEMENT', cmp })
  }
}

export const updateWap = (wap) => {
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
    return cmpsList[cmp.category]
      ? cmpsList[cmp.category].push(cmp)
      : (cmpsList[cmp.category] = [cmp])
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
