import React from 'react';
import classes from './MyInput.module.scss';

const MyInput = (props) => {
  const cls = [classes.Input];
  if (props.meta.error && props.meta.touched) {
    cls.push(classes.error);
  }
  return (
    <div className={cls.join(' ')}>
      <label>{props.label}</label>
      <input {...props.input} />
      {props.meta.error && props.meta.touched ? (
        <span>{props.meta.error}</span>
      ) : null}
    </div>
  );
};

export default MyInput;
