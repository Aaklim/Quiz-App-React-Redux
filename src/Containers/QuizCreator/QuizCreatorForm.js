import React from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../Components/UI/Button/Button'
import { Field, reduxForm, Form } from 'redux-form'
import MyInput from '../../Components/UI/Input/MyInput'
import { validate } from '../../form/controls'
import MySelect from '../../Components/UI/Select/MySelect'

const QuizCreatorForm = (props) => {
  console.log('QuizCreatorProps', props)
  return (
    <div className={classes.QuizCreator}>
      <div className={classes.content}>
        <h1>Создание теста</h1>
        <Form onSubmit={props.handleSubmit}>
          {!props.quizLength ? (
            <Field
              name="quizName"
              component={MyInput}
              label="Введите название теста"
            />
          ) : null}
          <Field name="question" component={MyInput} label="Введите вопрос" />
          <Field name="answer1" component={MyInput} label="Вариант 1" />
          <Field name="answer2" component={MyInput} label="Вариант 2" />
          <Field name="answer3" component={MyInput} label="Вариант 3" />
          <Field name="answer4" component={MyInput} label="Вариант 4" />
          <Field name="rightAnswer" component={MySelect} />
          <Button type="primary" disabled={props.invalid}>
            Добавить вопрос
          </Button>
          <Button
            type="success"
            disabled={!props.quizLength}
            onClick={props.createQuiz}
          >
            Создать Тест
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'quizCreatorform',
  initialValues: { rightAnswer: '1' },
  validate,
})(QuizCreatorForm)
