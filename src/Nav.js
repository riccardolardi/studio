import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Classnames from 'classnames';
import Header from './Header.js';
import News from './News.js';
import './Nav.scss';

function Nav(props) {

  const classes = Classnames({
    'show': props.show
  });

  return (
    <nav id="nav" className={classes}>
      <MenuIcon className="menu-icon" fontSize='large' />
      <CloseIcon className="close-icon" fontSize='large' />
    </nav>
  );
}

export default Nav;