import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authLogoutSaga } from '../../Redux/actioncreators/actioncreators'

const Logout = (props) => {
  useEffect(() => {
    props.authLogoutSaga()
  }, [props])
  return <Redirect to="/" />
}
const mapDispatchToProps = {
  authLogoutSaga,
}
export default connect(null, mapDispatchToProps)(Logout)
