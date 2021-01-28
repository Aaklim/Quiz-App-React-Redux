import React from 'react'
import classes from './myAuth.module.scss'
import MyInput from '../../Components/UI/Input/MyInput'
import Button from '../../Components/UI/Button/Button'
import { validate } from '../../form/controls'

import { reduxForm, Field, Form } from 'redux-form'

const MyAuth = (props) => {
  console.log('MyAuthProps', props)
  return (
    <div className={classes.Auth}>
      <div className={classes.wrapper}>
        <h1>Авторизация</h1>
        <Form onSubmit={props.handleSubmit}>
          <Field name="email" component={MyInput} label="Логин" />
          {props.ApiError ? (
            <div className={classes.apiError}>{props.ApiError}</div>
          ) : null}
          <Field name="password" component={MyInput} label="Пароль" />
          <Field
            name="login"
            component={Button}
            type="success"
            onClick={props.login}
            disabled={!(props.valid && props.anyTouched)}
          >
            Войти
          </Field>
          <Field
            name="registration"
            component={Button}
            type="primary"
            onClick={props.registration}
            disabled={!(props.valid && props.anyTouched)}
          >
            Зарегистрироваться
          </Field>
        </Form>
      </div>
    </div>
  )
}

export default reduxForm({ form: 'auth', validate })(MyAuth)
