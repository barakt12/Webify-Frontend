const initial_state = {
  isSaving: false,
}

export function systemReducer(state = initial_state, action) {
  switch (action.type) {
    case 'TOGGLE_SAVE':
      return { ...state, isSaving: !state.isSaving }
    default:
      return state
  }
}
