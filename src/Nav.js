import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Classnames from 'classnames';
import Header from './Header.js';
import News from './News.js';
import './Nav.scss';

let activeBarEl, liEls;

function Nav(props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(null);

	React.useLayoutEffect(() => {
		activeBarEl = document.querySelector('nav .active-bar');
		liEls = document.querySelectorAll('nav li');
	}, []);

	React.useEffect(() => {
		if (props.activeBlockIndex === 0) {
			setIsOpen(false);
			return;
		}
		setActive(props.activeBlockIndex - 1);
	}, [props.activeBlockIndex]);

	function setActive(index = 0, event) {
		if (event) event.preventDefault();
		const activeLiEl = liEls[index];
		if (!activeLiEl) return;
		const liElXs = [activeLiEl.offsetLeft, activeLiEl.parentElement.parentElement.offsetWidth - activeLiEl.offsetLeft - activeLiEl.offsetWidth];
		setTimeout(() => activeBarEl.style.left = `${liElXs[0]}px`, 
			index < activeIndex ? 0 : 250);
		setTimeout(() => activeBarEl.style.right = `${liElXs[1]}px`, 
			index < activeIndex ? 250 : 0);
		setActiveIndex(index);
	}

  const classes = Classnames({
    'show': props.show,
    'is-open': isOpen
  });

  return (
    <nav id="nav" className={classes}>
	    <div className="menu-drawer">
	    	<ul>
		    	<li className="menu-item"><a href="news" onClick={setActive.bind(this, 0)}>News</a></li>
		    	<li className="menu-item"><a href="profile" onClick={setActive.bind(this, 1)}>Profil</a></li>
		    	<li className="menu-item"><a href="work" onClick={setActive.bind(this, 2)}>Projekte</a></li>
		    	<li className="menu-item"><a href="contact" onClick={setActive.bind(this, 3)}>Kontakt</a></li>
		    </ul>
		    <span className="active-bar" />
	    </div>
    	<div className="menu-button" onClick={() => setIsOpen(!isOpen)}>
	      <MenuIcon className="menu-icon" fontSize='large' />
	      <CloseIcon className="close-icon" fontSize='large' />
	    </div>
    </nav>
  );
}

export default Nav;