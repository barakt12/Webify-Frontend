import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { userService } from '../../services/user.service'
import { setUser } from '../../store/user/user.action'
import { useDispatch } from 'react-redux'

export function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })
  const dispatch = useDispatch()

  const onLogin = async (cred) => {
    try {
      const user = await userService.login(cred)
      console.log(user)
      dispatch(setUser(user))
    } catch (error) {
      console.log(error)
    }
  }

  const onValidate = ({ username, password }) => {
    const errors = {}
    if (!username) errors.username = 'Required'
    if (!password) errors.password = 'Required'

    return errors
  }

  return (
    <section className="login-container">
      <div className="form-container">
        <Formik validateOnChange validate={onValidate} initialValues={credentials} onSubmit={onLogin}>
          {({ errors }) => (
            <Form>
              <Field name="username" type="text" as={TextField} variant="outlined" label="Username" fullWidth />
              {<span className="error">{errors.username}</span>}
              <Field name="password" type="password" as={TextField} variant="outlined" label="Password" fullWidth />
              {<span className="error">{errors.password}</span>}
              <Button type="submit" variant="contained" color="primary" size="large">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}
