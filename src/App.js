import React from 'react';
import classes from './App.module.scss';
import Quiz from './Containers/Quiz/Quiz';
import Layout from './Hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Auth from './Containers/Auth/Auth';
import QuizCreator from './Containers/QuizCreator/QuizCreator';
import Quizlist from './Containers/QuizList/Quizlist';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz-creator' component={QuizCreator} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/' component={Quizlist} />
      </Switch>
    </Layout>
  );
}

export default App;
