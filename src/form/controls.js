/* eslint-disable no-useless-escape */
const validate = (values) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const errors = {}
  if (!values.quizName) {
    errors.quizName = 'Enter Quiz name'
  }
  if (!values.question) {
    errors.question = 'Enter question'
  }
  if (!values.answer1) {
    errors.answer1 = 'Enter answer 1'
  }
  if (!values.answer2) {
    errors.answer2 = 'Enter answer 2'
  }
  if (!values.answer3) {
    errors.answer3 = 'Enter answer 3'
  }
  if (!values.answer4) {
    errors.answer4 = 'Enter answer 4'
  }
  if (!values.rightAnswer) {
    errors.rightAnswer = 'Select right answer'
  }
  if (!values.email) {
    errors.email = 'Enter email address'
  } else if (!re.test(String(values.email).toLowerCase())) {
    errors.email = 'Incorrect email address'
  }
  if (!values.password) {
    errors.password = 'Enter password'
  } else if (values.password.length < 6) {
    errors.password = 'Min 6 symbols'
  }

  return errors
}
export default validate
