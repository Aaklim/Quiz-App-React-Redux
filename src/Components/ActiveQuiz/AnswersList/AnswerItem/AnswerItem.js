/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import classes from './AnswerItem.module.scss'

const AnswerItem = ({ state, answer: { text, id }, onAnswerClick }) => {
  const cls = [classes.AnswerItem]
  if (state) {
    cls.push(classes[state])
  }

  return (
    <li className={cls.join(' ')} onClick={() => onAnswerClick(id)}>
      {text}
    </li>
  )
}
AnswerItem.propTypes = {
  answer: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  state: PropTypes.string,
}

AnswerItem.defaultProps = {
  state: null,
}

export default AnswerItem
