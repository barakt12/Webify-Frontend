const initial_state = {
  wap: { cmps: [] },
  selectedElement: null,
  displaySize: '100%',
  savedWaps: null,
  history: [],
}

export function wapReducer(state = initial_state, action) {
  switch (action.type) {
    case 'SET_WAP':
      console.log('set wap on reducer')
      return {
        ...state,
        wap: { ...action.wap },
        history: [],
      }

    case 'UPDATE_WAP':
      return {
        ...state,
        wap: { ...action.wap },
        history: [...state.history, action.lastWapState],
      }
    case 'UNDO_WAP':
      return {
        ...state,
        wap: { ...action.wap },
        history: [...action.history],
      }
    // case 'RESET_HISTORY':
    //   return { ...state, history: [action.wap] }
    case 'SET_SAVED_WAPS':
      return { ...state, savedWaps: action.savedWaps }
    case 'REMOVE_WAP':
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
