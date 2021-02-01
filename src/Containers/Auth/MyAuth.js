import React from 'react'
import { reduxForm, Field, Form } from 'redux-form'
import PropTypes from 'prop-types'
import classes from './myAuth.module.scss'
import MyInput from '../../Components/UI/Input/MyInput'
import Button from '../../Components/UI/Button/Button'
import validate from '../../form/controls'

const MyAuth = ({
  handleSubmit,
  ApiError,
  login,
  valid,
  anyTouched,
  registration,
}) => (
  <div className={classes.Auth}>
    <div className={classes.wrapper}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Field name="email" component={MyInput} label="Email address" />
        {ApiError ? <div className={classes.apiError}>{ApiError}</div> : null}
        <Field
          name="password"
          component={MyInput}
          label="Password"
          type="password"
        />
        <div className={classes.buttons}>
          <Field
            name="login"
            type="submit"
            component={Button}
            styleType="success"
            onClick={login}
            disabled={!(valid && anyTouched)}
          >
            Log in
          </Field>
          <Field
            type="submit"
            name="registration"
            component={Button}
            styleType="primary"
            onClick={registration}
            disabled={!(valid && anyTouched)}
          >
            Sign up
          </Field>
        </div>
      </Form>
    </div>
  </div>
)

MyAuth.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ApiError: PropTypes.string,
  login: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  anyTouched: PropTypes.bool.isRequired,
  registration: PropTypes.func.isRequired,
}
MyAuth.defaultProps = {
  ApiError: null,
}
export default reduxForm({ form: 'auth', validate })(MyAuth)
