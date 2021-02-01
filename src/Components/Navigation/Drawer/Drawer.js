/* eslint-disable react/no-array-index-key */
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Drawer.module.scss'
import {
  getAuthorizedSelector,
  getUserEmailSelector,
} from '../../../Redux/selectors/selectors'

const Drawer = ({ isOpen, authorized, userEmail, onClick }) => {
  const cls = [classes.Drawer]
  if (!isOpen) {
    cls.push(classes.close)
  }
  const links = authorized
    ? [
        { to: '/', label: 'Root quizzes', exact: true },
        { to: '/quiz-creator', label: 'Quiz creator', exact: false },
        {
          to: '/user-quizzes',
          label: `${userEmail} quizzes`,
          exact: false,
        },
        { to: '/logout', label: 'Logout', exact: false },
      ]
    : [
        { to: '/', label: 'Root quizzes', exact: true },
        { to: '/auth', label: 'Login', exact: false },
      ]
  const renderLinks = () =>
    links.map((link, index) => (
      <li key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          onClick={onClick}
        >
          {link.label}
        </NavLink>
      </li>
    ))
  return (
    <>
      {isOpen ? <Backdrop onClick={onClick} /> : null}
      <nav className={cls.join(' ')}>
        <ul>{renderLinks()}</ul>
      </nav>
    </>
  )
}

Drawer.propTypes = {
  userEmail: PropTypes.string.isRequired,
  authorized: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  authorized: getAuthorizedSelector(state),
  userEmail: getUserEmailSelector(state),
})

export default connect(mapStateToProps, null)(Drawer)
