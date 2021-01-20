import React from 'react';
import { connect } from 'react-redux';
import MyAuth from './MyAuth';

const AuthContainer = (props) => {
  const submitHandler = (values, dispatch, props) => {
    console.log('AuthSubmitteValues', values);
    console.log('AuthSubmitteDispatch', dispatch);
    console.log('AuthSubmitteProps', props);
  };
  const login = (e) => {
    console.log('login', props.authState.auth.values);
  };

  return <MyAuth login={login} onSubmit={submitHandler} />;
};

const mapStateToProps = (state) => {
  return {
    authState: state.form,
  };
};
export default connect(mapStateToProps, null)(AuthContainer);
