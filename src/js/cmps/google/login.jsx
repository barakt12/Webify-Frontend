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
    <div>
      <GoogleLogin clientId={clientId} buttonText="Login with google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true} />
    </div>
  )
}
