export function toggleSave() {
  return (dispatch) => {
    const action = { type: 'TOGGLE_SAVE' }
    dispatch(action)
  }
}
