import React, { useEffect } from 'react';
import Quizlist from './Quizlist';
import { connect } from 'react-redux';
import {
  getQuizesSelector,
  quizesIsLoadingSelector,
} from '../../Redux/selectors/selectors';
import { getQuizesSaga } from '../../Redux/actioncreators/actioncreators';
import Loader from '../../Components/UI/Loader/Loader';
import { NavLink } from 'react-router-dom';

const QuizListContainer = (props) => {
  useEffect(() => {
    props.getQuizesSaga();
  }, []);

  const renderQuizes = (quizes) => {
    return Object.keys(quizes).map((quizItem, index) => {
      const quiz = quizes[quizItem];

      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quizItem}>Тест {quiz[0].question}</NavLink>
        </li>
      );
    });
  };

  return props.isLoading ? (
    <Loader />
  ) : (
    <Quizlist quizes={renderQuizes(props.quizes)} />
  );
};

const mapStateToProps = (state) => {
  return {
    quizes: getQuizesSelector(state),
    isLoading: quizesIsLoadingSelector(state),
  };
};
const mapDispatchToProps = {
  getQuizesSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizListContainer);
