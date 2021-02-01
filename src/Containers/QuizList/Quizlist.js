import React from 'react'
import PropTypes from 'prop-types'
import classes from './Quizlist.module.scss'

const Quizlist = ({ quizzes, userId, userEmail }) => {
  const title = userId === 'root' ? 'Root' : userEmail

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.title}>{`${title} quizzes`}</div>
        <ul className={classes.quizzes}>{quizzes}</ul>
      </div>
    </div>
  )
}
Quizlist.propTypes = {
  userId: PropTypes.string,
  userEmail: PropTypes.string,
  quizzes: PropTypes.node,
}
Quizlist.defaultProps = {
  userId: 'root',
  userEmail: null,
}

export default Quizlist
