import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './Hoc/Layout/Layout'
import { connect } from 'react-redux'
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

function App(props) {
  useEffect(() => {
    if (localStorage.getItem('tokenID')) {
      const expirationDate = localStorage.getItem('expirationDate')
      if ((new Date(expirationDate) - new Date()) / 1000 >= 1) {
        props.authGetToken(localStorage.getItem('tokenID'))
        props.authGetUserId(localStorage.getItem('userId'))
        props.authGetEmailPassword({
          email: localStorage.getItem('userEmail'),
          password: 'PassWord',
        })
      }
    } else {
      props.authLogoutSaga()
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
          render={() => <QuizListContainer userId={props.userId} />}
        />
        <Route path="/" component={QuizListContainer} />
      </Switch>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: getUserIdSelector(state),
  }
}
const mapDispathToProps = {
  authGetToken,
  authGetUserId,
  authGetEmailPassword,
  authLogoutSaga,
}
export default connect(mapStateToProps, mapDispathToProps)(App)
