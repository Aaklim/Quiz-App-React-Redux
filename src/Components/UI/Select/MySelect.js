import React from 'react'
import classes from './MySelect.module.scss'

const MySelect = ({ input, label, meta: { touched, error } }) => {
  console.log('select-props', label)
  return (
    <div className={classes.select}>
      <label>{label}</label>
      <select {...input}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {touched && error ? <span>{error}</span> : null}
    </div>
  )
}

export default MySelect
