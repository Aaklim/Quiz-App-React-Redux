import React from 'react'
import PropTypes from 'prop-types'
import classes from './MyInput.module.scss'

const MyInput = ({
  meta: { error, touched },
  label,
  input,
  disabled,
  type,
}) => {
  const cls = [classes.Input]
  if (error && touched) {
    cls.push(classes.error)
  }
  return (
    <div className={cls.join(' ')}>
      <label>{label}</label>
      <input {...input} disabled={disabled} type={type} autoComplete="on" />
      {error && touched ? <span>{error}</span> : null}
    </div>
  )
}
MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  input: PropTypes.object,
}
MyInput.defautProps = {
  disabled: false,
  type: null,
}

export default MyInput
