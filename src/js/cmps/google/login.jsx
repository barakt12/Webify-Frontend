import { GoogleLogin } from 'react-google-login'
import { userService } from '../../services/user.service'
import { setUser } from '../../store/user/user.action'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

const clientId = '418919457463-dr7cgkvhfpjq4t1uutaj5n2pu8mq8347.apps.googleusercontent.com'

export function GoogleLoginBtn() {
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const onSuccess = async ({ profileObj }) => {
    const credentials = {
      username: profileObj.email,
      email: profileObj.email,
      fullname: profileObj.name,
      password: profileObj.googleId,
      imgUrl: profileObj.imageUrl,
      googleLogin: true,
    }

    const user = await userService.login(credentials)
    dispatch(setUser(user))
    navigation('/')
  }

  const onFailure = (res) => {
    console.log('logged in!', res)
  }

  return (
    <div>
      <GoogleLogin clientId={clientId} buttonText="Login with google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} />
    </div>
  )
}
