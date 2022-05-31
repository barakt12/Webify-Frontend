import { GoogleLogin } from 'react-google-login'

const clientId = '418919457463-dr7cgkvhfpjq4t1uutaj5n2pu8mq8347.apps.googleusercontent.com'

export function GoogleLoginBtn() {
  const onSuccess = (res) => {
    console.log('logged in!', res.profileObj)
  }

  const onFailure = (res) => {
    console.log('logged in!', res)
  }

  return (
    <div className='google-sign-in-btn-container'>
      <GoogleLogin clientId={clientId} buttonText="Sign in with Google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true} />
      <p>or</p>
    </div>
  )
}
