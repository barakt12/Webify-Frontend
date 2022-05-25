// import { wapService } from '../../services/wap-service'

const initial_state = {
  wap: {
    _id: 'newId',
    cmps: [],
  },
  cmpsList: {
    header: [],
    hero: [],
    text: [],
  },
}

export function wapReducer(state = initial_state, action) {
  switch (action.type) {
    case 'SET_WAP':
      return { ...state, wap: action.wap }
    default:
      return state
  }
}
