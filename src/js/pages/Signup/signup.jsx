import * as React from 'react'
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
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const SignUp = () => {
  const navigate = useNavigate()

  // eslint-disable-next-line no-unused-vars
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    fullname: '',
  })
  const dispatch = useDispatch()

  const onSignup = async (cred) => {
    try {
      const user = await userService.signup(cred)
      
      dispatch(setUser(user))
      toast.success('Signed up Successfully!')
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.err)
    }
  }

  const onValidate = ({ username, password, email, fullname }) => {
    const errors = {}

    if (!username) errors.username = 'Required'
    if (!email) errors.email = 'Required'
    if (!password) errors.password = 'Required'
    if (!fullname) errors.fullname = 'Required'

    return errors
  }

  const theme = createTheme()

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
        >
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
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: 700, fontSize: '38px' }}
            >
              Start designing for free
            </Typography>
            <Formik
              validateOnChange
              validate={onValidate}
              initialValues={credentials}
              onSubmit={onSignup}
            >
              {({ errors }) => (
                <Form>
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Full Name"
                    name="fullname"
                    autoFocus
                    sx={{ backgroundColor: '#eee' }}
                  />
                  {<span className="error">{errors.fullname}</span>}
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Username"
                    name="username"
                    autoFocus
                    sx={{ backgroundColor: '#eee' }}
                  />
                  {<span className="error">{errors.username}</span>}
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    sx={{ backgroundColor: '#eee' }}
                  />
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
                    Create account
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link href="/login" variant="body2" color="#666">
                        {'Have an account?'}
                      </Link>
                    </Grid>
                  </Grid>
                  {/* </Box> */}
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
