import { wapService } from '../../services/wap-service'

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
