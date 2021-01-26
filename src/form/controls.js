export const validate = (values, props) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const errors = {}
  if (!values.quizName) {
    errors.quizName = 'Введите название теста'
  }
  if (!values.question) {
    errors.question = 'Введите вопрос'
  }
  if (!values.answer1) {
    errors.answer1 = 'Введите ответ'
  }
  if (!values.answer2) {
    errors.answer2 = 'Введите ответ'
  }
  if (!values.answer3) {
    errors.answer3 = 'Введите ответ'
  }
  if (!values.answer4) {
    errors.answer4 = 'Введите ответ'
  }
  if (!values.rightAnswer) {
    errors.rightAnswer = 'Укажите правильный ответ'
  }
  if (!values.email) {
    errors.email = 'Укажите email'
  } else if (!re.test(String(values.email).toLowerCase())) {
    errors.email = 'Encorrect email address'
  }
  if (!values.password) {
    errors.password = 'Введите пароль'
  } else if (values.password.length < 6) {
    errors.password = 'Min 6 symbols'
  }

  return errors
}
