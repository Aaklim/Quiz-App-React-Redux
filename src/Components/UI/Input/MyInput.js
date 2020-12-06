import React from 'react';
import classes from './MyInput.module.scss';

const MyInput = (props) => {
  console.log(`inputProps-${props.input.name}`, props);
  console.log('Input Error', props.meta.error);
  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      <input {...props.input} />
      {props.meta.error ? <span>{props.meta.error}</span> : null}
    </div>
  );
};

export default MyInput;
