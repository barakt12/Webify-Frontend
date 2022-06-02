const initial_state = {
  isSaving: false,
  isPublishing: false,
}

export function systemReducer(state = initial_state, action) {
  switch (action.type) {
    case 'TOGGLE_SAVE':
      return { ...state, isSaving: !state.isSaving }
    case 'TOGGLE_PUBLISH':
      return { ...state, isPublishing: !state.isPublishing }
    default:
      return state
  }
}
