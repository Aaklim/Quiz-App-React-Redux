/* eslint-disable no-shadow */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { authLogoutSaga } from '../../Redux/actioncreators/actioncreators'

const Logout = ({ authLogoutSaga }) => {
  useEffect(() => {
    authLogoutSaga()
  }, [authLogoutSaga])
  return <Redirect to="/" />
}
Logout.propTypes = {
  authLogoutSaga: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  authLogoutSaga,
}
export default connect(null, mapDispatchToProps)(Logout)
