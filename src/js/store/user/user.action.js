import { userService } from '../../services/user.service'

export function setUser(user) {
  return (dispatch) => {
    const action = { type: 'SET_USER', user }
    dispatch(action)
  }
}

export function loadSavedWaps() {
  return async (dispatch, getState) => {
    const user = getState().userModule.user
    if (user?._id) {
      const updatedUser = await userService.getById(user._id)
      console.log(updatedUser)
      dispatch({ type: 'SET_USER', user: updatedUser })
    }
  }
}

export function userLogout() {
  return (dispatch) => {
    userService.logout()
    dispatch({
      type: 'SET_USER',
      user: null,
    })
  }
}
