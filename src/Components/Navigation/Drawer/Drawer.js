import React from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { connect } from 'react-redux'
import classes from './Drawer.module.scss'
import { NavLink } from 'react-router-dom'
import {
  getAuthorizedSelector,
  getUserEmailSelector,
} from '../../../Redux/selectors/selectors'

const Drawer = (props) => {
  const cls = [classes.Drawer]
  if (!props.isOpen) {
    cls.push(classes.close)
  }
  const links = props.authorized
    ? [
        { to: '/', label: 'Root quizzes', exact: true },
        { to: '/quiz-creator', label: 'Quiz creator', exact: false },
        {
          to: '/user-quizzes',
          label: `${props.userEmail} quizzes`,
          exact: false,
        },
        { to: '/logout', label: 'Logout', exact: false },
      ]
    : [
        { to: '/', label: 'Root quizzes', exact: true },
        { to: '/auth', label: 'Login', exact: false },
      ]
  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={props.onClick}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }
  return (
    <React.Fragment>
      {props.isOpen ? <Backdrop onClick={props.onClick} /> : null}
      <nav className={cls.join(' ')}>
        <ul>{renderLinks()}</ul>
      </nav>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    authorized: getAuthorizedSelector(state),
    userEmail: getUserEmailSelector(state),
  }
}

export default connect(mapStateToProps, null)(Drawer)
