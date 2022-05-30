import { userService } from "../../services/user.service"

export function setUser(user) {
  return (dispatch) => {
    const action = {
      type: 'SET_USER',
      user,
    }
    dispatch(action)
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
