export const lenghtControl = (value, allvalues, props, name) => {
  // console.log('FromControlValue', value);
  // console.log('FromControlAllvalues', allvalues);
  // console.log('FromControlAllprops', props.anyTouched);
  // console.log('FromControlAllname', name);
  if (props.anyTouched && !value) {
    return 'Is Empty Error';
  } else {
    return undefined;
  }
};

export const validate = (values) => {
  console.log('ValidateValues', values);
  const errors = {};
  if (!values.question) {
    errors.question = 'Введите вопрос';
  }
  if (!values.answer1) {
    errors.answer1 = 'Введите ответ';
  }
  if (!values.answer2) {
    errors.answer2 = 'Введите ответ';
  }
  if (!values.answer3) {
    errors.answer3 = 'Введите ответ';
  }
  if (!values.answer4) {
    errors.answer4 = 'Введите ответ';
  }
  if (!values.rightAnswer) {
    errors.rightAnswer = 'Укажите правильный ответ';
  }
  console.log('ValidateErrrors', errors);
  return errors;
};
