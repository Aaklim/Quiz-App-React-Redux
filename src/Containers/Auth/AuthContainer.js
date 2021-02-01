/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  authGetEmailPasswordSaga,
  authLoginSaga,
  authRegisterSaga,
} from '../../Redux/actioncreators/actioncreators'
import {
  getAuthErrorSelector,
  getAuthorizedSelector,
  getFormStateSelector,
} from '../../Redux/selectors/selectors'
import MyAuth from './MyAuth'

const AuthContainer = ({
  authGetEmailPasswordSaga,
  authLoginSaga,
  authRegisterSaga,
  authorized,
  error,
  formState,
}) => {
  const submitHandler = (values) => {
    authGetEmailPasswordSaga(values.email, values.password)
  }
  const login = () => {
    authLoginSaga(formState.auth.values.email, formState.auth.values.password)
  }
  const registration = () => {
    authRegisterSaga(
      formState.auth.values.email,
      formState.auth.values.password,
    )
  }

  return authorized ? (
    <Redirect to="/quiz-creator" />
  ) : (
    <MyAuth
      login={login}
      onSubmit={submitHandler}
      registration={registration}
      ApiError={error}
    />
  )
}

AuthContainer.propTypes = {
  authGetEmailPasswordSaga: PropTypes.func.isRequired,
  authLoginSaga: PropTypes.func.isRequired,
  authRegisterSaga: PropTypes.func.isRequired,
  authorized: PropTypes.bool.isRequired,
  error: PropTypes.string,
}
AuthContainer.defaultProps = {
  error: null,
}

const mapStateToProps = (state) => ({
  error: getAuthErrorSelector(state),
  authorized: getAuthorizedSelector(state),
  formState: getFormStateSelector(state),
})
const mapDispatchToProps = {
  authGetEmailPasswordSaga,
  authLoginSaga,
  authRegisterSaga,
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
