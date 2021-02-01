import React from 'react'
import PropTypes from 'prop-types'
import classes from './MySelect.module.scss'

const MySelect = ({ input, label, meta: { touched, error } }) => (
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
MySelect.propTypes = {
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  input: PropTypes.object,
}
export default MySelect
