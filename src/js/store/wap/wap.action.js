import { templateService } from '../../services/templates.service'

// export const loadCmps = () => {
//   const cmpsList = {}
//   const cmps = wapService.getCmps()
//   cmps.forEach((cmp) => {
//     return cmpsList[cmp.category] ? cmpsList[cmp.category].push(cmp) : (cmpsList[cmp.category] = [cmp])
//   })
// }

export function loadTemplate(id) {
  return async (dispach) => {
    try {
      const wap = templateService.getTemplateById(id)
      dispach({ type: 'SET_WAP', wap })
    } catch (err) {
      console.log(err)
    }
  }
}
