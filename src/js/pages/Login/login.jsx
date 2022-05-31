import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Field, Form } from 'formik'
import { userService } from '../../services/user.service'
import { setUser } from '../../store/user/user.action'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { GoogleLoginBtn } from '../../cmps/google/login'
import { gapi } from 'gapi-script'

export const Login = () => {
  const [credentials, setCredentials] = useState({
    loginWith: '',
    password: '',
  })
  const clientId = '418919457463-dr7cgkvhfpjq4t1uutaj5n2pu8mq8347.apps.googleusercontent.com'
  const dispatch = useDispatch()
  const navigation = useNavigate()

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: '',
      })
    }

    gapi.load('client:auth2', start)
  })

  const onLogin = async (cred) => {
    try {
      cred = cred.loginWith.includes('@') ? { ...cred, email: cred.loginWith } : { ...cred, username: cred.loginWith }
      const user = await userService.login(cred)
      dispatch(setUser(user))
      navigation('/')
      console.log('login successfully')
    } catch (error) {
      console.log(error)
    }
  }

  const onValidate = ({ loginWith, password }) => {
    const errors = {}
    if (!loginWith) errors.loginWith = 'Missing email or username input'
    if (!password || password.length < 3) errors.password = 'Passwords must be at least three characters.'

    return errors
  }

  const theme = createTheme()

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '475px',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h1" variant="h5" sx={{ fontWeight: 700, fontSize: '38px' }}>
              Log Into My Account
            </Typography>
            <Formik validateOnChange validate={onValidate} initialValues={credentials} onSubmit={onLogin}>
              {({ errors }) => (
                <Form>
                  <GoogleLoginBtn />
                  <Field as={TextField} margin="normal" required fullWidth placeholder="Email or Username" name="loginWith" autoFocus sx={{ backgroundColor: '#eee' }} />
                  {<span className="error">{errors.email}</span>}
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{ backgroundColor: '#eee' }}
                  />
                  {<span className="error">{errors.password}</span>}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: '#4253ff',
                      fontSize: '1rem',
                      fontFamily: 'sans-serif',
                      height: '50px',
                      textTransform: 'capitalize',
                      fontWeight: '600',
                    }}
                  >
                    Log In
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link href="/signup" variant="body2" color="#666">
                        {"Don't have an account?"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </div>
  )
}
