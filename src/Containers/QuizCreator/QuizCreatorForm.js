import React from 'react';
import classes from './QuizCreator.module.scss';
import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';
import Select from '../../Components/UI/Select/Select';
import { Field, reduxForm, Form } from 'redux-form';
import MyInput from '../../Components/UI/Input/MyInput';
import { lenghtControl, validate } from '../../form/controls';
import MySelect from '../../Components/UI/Select/MySelect';

const QuizCreatorForm = (props) => {
  console.log('QuizCreatorProps', props);
  return (
    <div className={classes.QuizCreator}>
      <div className={classes.content}>
        <h1>Создание теста</h1>
        <Form onSubmit={props.handleSubmit}>
          <Field name='question' component={MyInput} label='Введите вопрос' />
          <Field name='answer1' component={MyInput} label='Вариант 1' />
          <Field name='answer2' component={MyInput} label='Вариант 2' />
          <Field name='answer3' component={MyInput} label='Вариант 3' />
          <Field name='answer4' component={MyInput} label='Вариант 4' />
          <Field name='rightAnswer' component={MySelect} />
          <Button type='primary' disabled={props.invalid}>
            Добавить вопрос
          </Button>
          <Button
            type='success'
            disabled={!props.quizLength}
            onClick={props.createQuiz}
          >
            Создать Тест
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default reduxForm({ form: 'quizCreatorform', validate })(
  QuizCreatorForm
);
