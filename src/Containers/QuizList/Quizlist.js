import classes from './Quizlist.module.scss'
import React from 'react'

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

export default Quizlist
