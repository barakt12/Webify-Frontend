const initialState = {
  wap: null,
  selectedCmp: null,
  displaySize: '100%',
  savedWaps: null,
  history: [],
}

export function wapReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_WAP':
      return {
        ...initialState,
        wap: { ...action.wap },
        savedWaps: state.savedWaps,
      }
    case 'UPDATE_WAP':
      return {
        ...state,
        wap: { ...action.wap },
        history: [...state.history, state.wap],
      }
    case 'UNDO_WAP':
      return {
        ...state,
        wap: { ...action.wap },
        history: [...action.history],
      }
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
      return { ...state, selectedCmp: { ...action.cmp } }

    case 'SET_DISPLAY_SIZE':
      return { ...state, displaySize: action.displaySize }
    case 'PUBLISH_WAP':
      return { ...state, wap: { ...state.wap, isPublished: true } }
    default:
      return state
  }
}
