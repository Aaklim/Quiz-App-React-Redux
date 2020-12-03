import React from 'react';
import classes from './App.module.scss';
import Layout from './Hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Auth from './Containers/Auth/Auth';
import QuizCreator from './Containers/QuizCreator/QuizCreator';
import QuizListContainer from './Containers/QuizList/QuizListContainer';
import QuizContainer from './Containers/Quiz/QuizContainer';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz-creator' component={QuizCreator} />
        <Route path='/quiz/:id' component={QuizContainer} />
        <Route path='/' component={QuizListContainer} />
      </Switch>
    </Layout>
  );
}

export default App;
