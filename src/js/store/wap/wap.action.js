import { wapService } from '../../services/wap-service'

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
  const cmps = wapService.getCmps()
  cmps.forEach((cmp) => {
    return cmpsList[cmp.category]
      ? cmpsList[cmp.category].push(cmp)
      : (cmpsList[cmp.category] = [cmp])
  })
}

export const loadTemplate = (id) => {
  return async (dispatch) => {
    try {
      const wap = wapService.getTemplateById(id)
      dispatch({ type: 'SET_WAP', wap })
    } catch (err) {
      console.log(err)
    }
  }
}
