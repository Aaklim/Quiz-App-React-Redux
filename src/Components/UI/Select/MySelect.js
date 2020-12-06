import React from 'react';
import classes from './MySelect.module.scss';

const MySelect = (props) => {
  return (
    <div className={classes.select}>
      <label>Правильный ответ</label>
      <select {...props.input}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </div>
  );
};

export default MySelect;
