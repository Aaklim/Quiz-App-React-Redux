import React from 'react';
import classes from './myAuth.module.scss';
import MyInput from '../../Components/UI/Input/MyInput';
import Button from '../../Components/UI/Button/Button';

import { reduxForm, Field, Form } from 'redux-form';

const MyAuth = (props) => {
  return (
    <div className={classes.Auth}>
      <div className={classes.wrapper}>
        <h1>Авторизация</h1>
        <Form onSubmit={props.handleSubmit}>
          <Field name='auth' component={MyInput} label='Логин' />
          <Field name='password' component={MyInput} label='Пароль' />
          <Field name='button1' component={Button} />
          <Button
            type='success'
            name='pass'
            onClick={props.login}
            // disabled={!props.isFormValid}
          >
            Войти
          </Button>
          <Button
            type='primary'
            name='auth'
            // onClick={props.handleSubmit}
            // disabled={!props.isFormValid}
          >
            Зарегистрироваться
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default reduxForm({ form: 'auth' })(MyAuth);
