import React from 'react'
import classes from './App.module.scss'
import Layout from './Hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Auth from './Containers/Auth/Auth'
import QuizCreator from './Containers/QuizCreator/QuizCreator'
import QuizCreatorContainer from './Containers/QuizCreator/QuizCreatorContainer'
import QuizListContainer from './Containers/QuizList/QuizListContainer'
import QuizContainer from './Containers/Quiz/QuizContainer'
import AuthContainer from './Containers/Auth/AuthContainer'

function App(props) {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={AuthContainer} />
        <Route path="/quiz-creator" component={QuizCreatorContainer} />
        <Route path="/quiz/:id" component={QuizContainer} />
        <Route path="/" component={QuizListContainer} />
      </Switch>
    </Layout>
  )
}

export default App
