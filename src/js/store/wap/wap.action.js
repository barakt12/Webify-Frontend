import { wapService } from '../../services/wap-service'

export const loadCmps = () => {
  const cmpsList = {}
  const cmps = wapService.getCmps()
  cmps.forEach((cmp) => {
    return cmpsList[cmp.category]
      ? cmpsList[cmp.category].push(cmp)
      : (cmpsList[cmp.category] = [cmp])
  })
}

export function loadTemplate(id) {
  return async (dispach) => {
    try {
      const wap = wapService.getTemplateById(id)
      dispach({ type: 'SET_WAP', wap })
    } catch (err) {
      console.log(err)
    }
  }
}
