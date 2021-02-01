import React from 'react'
import PropTypes from 'prop-types'
import classes from './MenuToggle.module.scss'

const MenuToggle = ({ isOpen, onToggle }) => {
  const cls = [classes.MenuToggle, 'fas']
  if (isOpen) {
    cls.push('fa-times')
    cls.push(classes.open)
  } else {
    cls.push('fa-bars')
  }
  return <i className={cls.join(' ')} onClick={onToggle} />
}

MenuToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default MenuToggle
