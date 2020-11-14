import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Drawer.module.scss';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Список', exact: true },
  { to: '/auth', label: 'Авторизация', exact: false },
  { to: '/quiz-creator', label: 'Сздать тест', exact: false },
];

const Drawer = (props) => {
  const cls = [classes.Drawer];
  if (!props.isOpen) {
    cls.push(classes.close);
  }
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
      );
    });
  };
  return (
    <React.Fragment>
      {props.isOpen ? <Backdrop onClick={props.onClick} /> : null}
      <nav className={cls.join(' ')}>
        <ul>{renderLinks()}</ul>
      </nav>
    </React.Fragment>
  );
};

export default Drawer;
