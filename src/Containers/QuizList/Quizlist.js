import classes from './Quizlist.module.scss';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/UI/Loader/Loader';
import Axios from 'axios';

const Quizlist = () => {
  const [quizes, setQuizes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          'https://quiz-app-react-redux.firebaseio.com/quizes.json'
        );
        console.log('ResponseGet', response.data);
        setQuizes({
          ...response.data,
        });
      } catch (e) {
        console.log('ErrorGet', e);
      }
    };
    fetchData();
  }, []);
  const renderQuizes = () => {
    if (!quizes) {
      return null;
    }
    return Object.keys(quizes).map((quizItem, index) => {
      const quiz = quizes[quizItem];
      console.log('Quizlist-Quiz', quiz);
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quizItem}>Тест {quiz[0].question}</NavLink>
        </li>
      );
    });
  };
  return (
    <div className={classes.QuizList}>
      <div>
        <h1>Список Тестов</h1>
        {renderQuizes() ? <ul>{renderQuizes()}</ul> : <Loader />}
      </div>
    </div>
  );
};

export default Quizlist;
