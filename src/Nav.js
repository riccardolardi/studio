import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Classnames from 'classnames';
import './Nav.scss';

let activeBarEl, liEls;

function Nav(props) {
	const [activeIndex, setActiveIndex] = React.useState(null);
	const {
		activeBlockIndex, 
		isMobile, 
		show, 
		isMenuOpen, 
		setIsMenuOpen, 
		moveToBlock, 
		isNavigating 
	} = props;

	React.useLayoutEffect(() => {
		activeBarEl = document.querySelector('nav .active-bar');
		liEls = document.querySelectorAll('nav li');
		setActiveIndex(0);
	}, []);

	React.useLayoutEffect(() => {
		if (show && !isMobile) setTimeout(() => setIsMenuOpen(true), 500);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [show]);

	React.useEffect(() => {
		setActive(activeIndex);
		if (isMobile) {
			if (isMenuOpen) {
				disableBodyScroll(document.querySelector('nav'));
			} else {
				enableBodyScroll(document.querySelector('nav'));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMenuOpen]);

	React.useEffect(() => {
		if (isNavigating) return;
		if (activeBlockIndex === 0) {
			setIsMenuOpen(false);
			return;
		}
		setActive(activeBlockIndex - 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeBlockIndex]);

	function setActive(index = 0) {
		const activeLiEl = liEls[index];
		if (!activeLiEl) return;
		const liElDimsH = 
			[activeLiEl.offsetLeft, activeLiEl.parentElement.parentElement.offsetWidth - 
				activeLiEl.offsetLeft - activeLiEl.offsetWidth];
		const liElDimsV = 
			[activeLiEl.offsetTop, activeLiEl.parentElement.parentElement.offsetHeight - 
				activeLiEl.offsetTop - activeLiEl.offsetHeight];
		if (isMobile) {
			setTimeout(() => activeBarEl.style.top = `${liElDimsV[0] - 2}px`, index < activeIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.bottom = `${liElDimsV[1]}px`, index < activeIndex ? 125 : 0);
		} else {
			setTimeout(() => activeBarEl.style.left = `${liElDimsH[0]}px`, index < activeIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.right = `${liElDimsH[1]}px`, index < activeIndex ? 125 : 0);
		}
		setActiveIndex(index);
		liEls.forEach(el => el.classList.remove('active'));
		liEls[index].classList.add('active');
	}

	function linkClicked(index = 0, event) {
		if (event) event.preventDefault();
		setActive(index);
		setTimeout(() => moveToBlock(index));
	}

  const classes = Classnames({
    'show': show,
    'is-open': isMenuOpen
  });

  return (
    <nav id="nav" className={classes}>
	    <div className="menu-drawer">
	    	<ul>
		    	<li className="menu-item"><a href="news" onClick={linkClicked.bind(this, 0)}>News</a></li>
		    	<li className="menu-item"><a href="profile" onClick={linkClicked.bind(this, 1)}>Profil</a></li>
		    	<li className="menu-item"><a href="work" onClick={linkClicked.bind(this, 2)}>Projekte</a></li>
		    	<li className="menu-item"><a href="contact" onClick={linkClicked.bind(this, 3)}>Kontakt</a></li>
		    </ul>
		    <span className="active-bar" />
	    </div>
    	<div className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
	      <MenuIcon className="menu-icon" fontSize='large' />
	      <CloseIcon className="close-icon" fontSize='large' />
	    </div>
    </nav>
  );
}

export default Nav;