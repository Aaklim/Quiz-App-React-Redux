/* eslint-disable no-shadow */
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from './Hoc/Layout/Layout'
import {
  authGetToken,
  authGetUserId,
  authGetEmailPassword,
  authLogoutSaga,
} from './Redux/actioncreators/actioncreators'
import { getUserIdSelector } from './Redux/selectors/selectors'
import QuizCreatorContainer from './Containers/QuizCreator/QuizCreatorContainer'
import QuizListContainer from './Containers/QuizList/QuizListContainer'
import QuizContainer from './Containers/Quiz/QuizContainer'
import AuthContainer from './Containers/Auth/AuthContainer'
import Logout from './Components/Logout/Logout'

function App({
  authGetToken,
  authGetUserId,
  authGetEmailPassword,
  authLogoutSaga,
  userId,
}) {
  useEffect(() => {
    if (localStorage.getItem('tokenID')) {
      const expirationDate = localStorage.getItem('expirationDate')
      if ((new Date(expirationDate) - new Date()) / 1000 >= 1) {
        authGetToken(localStorage.getItem('tokenID'))
        authGetUserId(localStorage.getItem('userId'))
        authGetEmailPassword({
          email: localStorage.getItem('userEmail'),
          password: 'PassWord',
        })
      }
    } else {
      authLogoutSaga()
    }
  }, [])

  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={AuthContainer} />
        <Route path="/logout" component={Logout} />
        <Route path="/quiz-creator" component={QuizCreatorContainer} />
        <Route path="/quiz/:id/:userId" component={QuizContainer} />
        <Route
          path="/user-quizzes"
          render={() => <QuizListContainer userId={userId} />}
        />
        <Route path="/" component={QuizListContainer} />
      </Switch>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  userId: getUserIdSelector(state),
})
const mapDispathToProps = {
  authGetToken,
  authGetUserId,
  authGetEmailPassword,
  authLogoutSaga,
}
App.propTypes = {
  userId: PropTypes.string,
  authGetToken: PropTypes.func.isRequired,
  authGetUserId: PropTypes.func.isRequired,
  authGetEmailPassword: PropTypes.func.isRequired,
  authLogoutSaga: PropTypes.func.isRequired,
}
App.defaultProps = {
  userId: null,
}
export default connect(mapStateToProps, mapDispathToProps)(App)
