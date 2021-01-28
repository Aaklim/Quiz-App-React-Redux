import classes from './Quizlist.module.scss'
import React from 'react'

const Quizlist = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.title}>Quizess list</div>
        <ul className={classes.quizes}>{props.quizes}</ul>
      </div>
    </div>
  )
}

export default Quizlist
