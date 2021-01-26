import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  authGetEmailPasswordSaga,
  authLoginSaga,
  authRegisterSaga,
} from '../../Redux/actioncreators/actioncreators'
import MyAuth from './MyAuth'

const AuthContainer = (props) => {
  const submitHandler = (values) => {
    props.authGetEmailPasswordSaga(values.email, values.password)
  }
  const login = (e) => {
    const { email, password } = props.formState.auth.values
    props.authLoginSaga(email, password)
  }
  const registration = (e) => {
    const { email, password } = props.formState.auth.values
    props.authRegisterSaga(email, password)
  }

  return props.authorized ? (
    <Redirect to="/quiz-creator" />
  ) : (
    <MyAuth
      login={login}
      onSubmit={submitHandler}
      registration={registration}
      ApiError={props.error}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authorized: !!state.auth.token,
    formState: state.form,
  }
}
const mapDispatchToProps = {
  authGetEmailPasswordSaga,
  authLoginSaga,
  authRegisterSaga,
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
