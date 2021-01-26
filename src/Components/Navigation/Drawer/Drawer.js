import React from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { connect } from 'react-redux'
import classes from './Drawer.module.scss'
import { NavLink } from 'react-router-dom'

const Drawer = (props) => {
  const cls = [classes.Drawer]
  if (!props.isOpen) {
    cls.push(classes.close)
  }
  const links = props.authorized
    ? [
        { to: '/', label: 'Список', exact: true },
        { to: '/quiz-creator', label: 'Создать тест', exact: false },
        { to: '/userQuizes', label: `${props.userEmail}`, exact: false },
        { to: '/logout', label: 'Выйти', exact: false },
      ]
    : [
        { to: '/', label: 'Список', exact: true },
        { to: '/auth', label: 'Авторизация', exact: false },
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
    authorized: !!state.auth.token,
    userEmail: state.auth.email,
  }
}

export default connect(mapStateToProps, null)(Drawer)
