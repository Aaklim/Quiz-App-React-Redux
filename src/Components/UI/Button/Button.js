import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.scss'

const Button = ({ styleType, onClick, disabled, children, type }) => {
  const cls = [classes.Button, classes[styleType]]
  return (
    <button
      type={type}
      onClick={onClick}
      className={cls.join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  styleType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}
Button.defaultProps = {
  disabled: false,
  type: 'button',
}
export default Button
