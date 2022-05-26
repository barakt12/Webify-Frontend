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
  displaySize: '100%',
}

export function wapReducer(state = initial_state, action) {
  switch (action.type) {
    case 'SET_WAP':
      return { ...state, wap: { ...action.wap } }

    case 'SET_ELEMENT':
      console.log('selected element',action.cmp)
      return { ...state, selectedElement: { ...action.cmp } }

    case 'SET_DISPLAY_SIZE':
      return { ...state, displaySize: action.displaySize }
    default:
      return state
  }
}
