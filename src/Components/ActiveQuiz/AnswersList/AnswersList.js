/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = ({ answers, onAnswerClick, state }) => (
  <ul>
    {answers.map((answer, index) => (
      <AnswerItem
        answer={answer}
        key={index}
        onAnswerClick={onAnswerClick}
        state={state ? state[answer.id] : null}
      />
    ))}
  </ul>
)
AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string),
}
AnswersList.dafaultProps = {
  state: null,
}
export default AnswersList
