const initial_state = {
  wap: { cmps: [] },
  selectedElement: null,
  displaySize: '100%',
  savedWaps: null,
  wapDraft: []
}

export function wapReducer(state = initial_state, action) {
  switch (action.type) {
    case 'SET_WAP':
      return { ...state, wap: { ...action.wap } }
    case 'SET_SAVED_WAPS':
      return { ...state, savedWaps: action.savedWaps }
    case 'UPDATE_WAP_DRAFT':
      state.wapDraft.push(action.cmps) 
      return { ...state }
    case 'REMOVE_DRAFT':
      return {
        ...state,
        savedWaps: state.savedWaps.filter((wap) => wap._id !== action.wapId),
      }
    case 'SET_THUMBNAIL':
      return { ...state, wap: { ...state.wap, thumbnail: action.imgData } }
    case 'SET_ELEMENT':
      return { ...state, selectedElement: { ...action.cmp } }
    case 'SET_DISPLAY_SIZE':
      return { ...state, displaySize: action.displaySize }
    default:
      return state
  }
}
