// import { wapService } from '../../services/wap-service'
import { v4 as uuidv4 } from 'uuid'

const initial_state = {
  wap: {
    _id: uuidv4(),
    cmps: [],
  },
  cmpsList: {
    header: [],
    hero: [],
    text: [],
  },
  selectedElement: null,
}

export function wapReducer(state = initial_state, action) {
  switch (action.type) {
    case 'SET_WAP':
      console.log('set wap')
      return { ...state, wap: { ...action.wap } }

    case 'SET_ELEMENT':
      console.log('set element')
      return { ...state, selectedElement: { ...action.cmp } }
    default:
      return state
  }
}
