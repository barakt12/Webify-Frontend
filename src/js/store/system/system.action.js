export function toggleSave() {
  return (dispatch) => {
    const action = { type: 'TOGGLE_SAVE' }
    dispatch(action)
  }

}

export function togglePublish() {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_PUBLISH'})
  }
}