import React from 'react';
import classes from './App.module.scss';
import Quiz from './Containers/Quiz/Quiz';
import Layout from './Hoc/Layout/Layout';

function App() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
