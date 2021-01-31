import React from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../Components/UI/Button/Button'
import { Field, reduxForm, Form } from 'redux-form'
import MyInput from '../../Components/UI/Input/MyInput'
import { validate } from '../../form/controls'
import MySelect from '../../Components/UI/Select/MySelect'

const QuizCreatorForm = (props) => {
  return (
    <div className={classes.QuizCreator}>
      <div className={classes.content}>
        <h1>Quiz creator</h1>
        <Form onSubmit={props.handleSubmit}>
          {!props.quizLength ? (
            <Field name="quizName" component={MyInput} label="Quiz name" />
          ) : null}
          <Field name="question" component={MyInput} label="Question" />
          <Field name="answer1" component={MyInput} label="Answer 1" />
          <Field name="answer2" component={MyInput} label="Answer 2" />
          <Field name="answer3" component={MyInput} label="Answer 3" />
          <Field name="answer4" component={MyInput} label="Answer 4" />
          <Field
            name="rightAnswer"
            component={MySelect}
            label="Correct answer"
          />
          <Button type="primary" disabled={props.invalid}>
            Add question
          </Button>
          <Button
            type="success"
            disabled={!props.quizLength}
            onClick={props.createQuiz}
          >
            Create Quiz
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
