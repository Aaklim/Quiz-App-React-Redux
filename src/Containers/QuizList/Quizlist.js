import classes from './Quizlist.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Quizlist = () => {
  const renderQuizes = () => {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>Тест {quiz}</NavLink>
        </li>
      );
    });
  };
  return (
    <div className={classes.QuizList}>
      <div>
        <h1>Список Тестов</h1>
        <ul>{renderQuizes()}</ul>
      </div>
    </div>
  );
};

export default Quizlist;
