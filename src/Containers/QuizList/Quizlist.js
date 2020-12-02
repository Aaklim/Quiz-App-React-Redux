import classes from './Quizlist.module.scss';
import React from 'react';

const Quizlist = (props) => {
  return (
    <div className={classes.QuizList}>
      <div>
        <h1>Список Тестов</h1>
        {props.quizes}
      </div>
    </div>
  );
};

export default Quizlist;
