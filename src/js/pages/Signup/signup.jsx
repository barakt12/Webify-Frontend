import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { userService } from '../../services/user.service'
import { setUser } from '../../store/user/user.action'
import { useDispatch } from 'react-redux'

export function SignUp() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    fullname: '',
  })
  const dispatch = useDispatch()

  const onSubmitUser = async (cred) => {
    try {
      const user = await userService.signup(cred)
      dispatch(setUser(user))
    } catch (error) {
      // TODO: barak you need to add user msg!@!!!!
      console.log(error.response.data.err)
    }
  }

  const onValidate = ({ username, password, email }) => {
    const errors = {}

    if (!username) errors.username = 'Required'
    if (!password) errors.password = 'Required'

    return errors
  }

  return (
    <section className="login-container">
      <div className="form-container">
        <Formik validateOnChange validate={onValidate} initialValues={credentials} onSubmit={onSubmitUser}>
          {({ errors }) => (
            <>
              <Form>
                <Field name="username" type="text" as={TextField} variant="outlined" label="Username" fullWidth />
                {<span className="error">{errors.username}</span>}
                <Field name="password" type="password" as={TextField} variant="outlined" label="Password" fullWidth />
                {<span className="error">{errors.password}</span>}
                <Field name="fullname" type="text" as={TextField} variant="outlined" label="Full Name" fullWidth />
                <Button type="submit" variant="contained" color="primary" size="large">
                  Sign Up
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </section>
  )
}
