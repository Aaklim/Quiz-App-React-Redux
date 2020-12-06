import React from 'react';
import { getQuizCreatorStateSelector } from '../../Redux/selectors/selectors';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import {
  addQuestionToQuiz,
  createQuizSaga,
} from '../../Redux/actioncreators/actioncreators';
import QuizCreatorForm from './QuizCreatorForm';

const QuizCreatorContainer = (props) => {
  console.log('QuizCreator', props);
  const submitHandler = (e) => {
    let questionItem = {
      question: e.question,
      rightAnswerId: Number(e.rightAnswer),
      id: props.quiz.length + 1,
      answers: [
        { id: 1, text: e.answer1 },
        { id: 2, text: e.answer2 },
        { id: 3, text: e.answer3 },
        { id: 4, text: e.answer4 },
      ],
    };
    props.addQuestionToQuiz(questionItem);
    props.reset('quizCreatorform');
  };
  const createQuiz = (e) => {
    e.preventDefault();
    props.createQuizSaga(props.quiz);
  };
  return (
    <QuizCreatorForm
      onSubmit={(e) => submitHandler(e)}
      createQuiz={createQuiz}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    quiz: getQuizCreatorStateSelector(state),
  };
};
const mapDispatchToProps = {
  addQuestionToQuiz,
  reset,
  createQuizSaga,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCreatorContainer);
