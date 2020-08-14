import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {ReactComponent as Icon} from './img/icons/wave-round.svg';
import Classnames from 'classnames';
import './Nav.scss';

let activeBarEl, liEls;

function Nav(props) {
	const {
		activeBlockIndex, 
		isMobile, 
		show, 
		isMenuOpen, 
		projectOpen, 
		setOpenProjectId, 
		setIsMenuOpen, 
		moveToBlock, 
		prevBlockIndex 
	} = props;

	React.useLayoutEffect(() => {
		activeBarEl = document.querySelector('nav .active-bar');
		liEls = document.querySelectorAll('nav li');
	}, []);

	React.useEffect(() => {
		if (activeBlockIndex === 0) {
			setIsMenuOpen(false);
		}
		setActive(activeBlockIndex - 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeBlockIndex]);

	function setActive(index = 0) {
		const activeLiEl = liEls[index];
		if (!activeLiEl) return;
		const liElDimsH = [
			activeLiEl.offsetLeft, 
			activeLiEl.parentElement.parentElement.offsetWidth - activeLiEl.offsetLeft - activeLiEl.offsetWidth
		];
		const liElDimsV = [
			activeLiEl.offsetTop, 
			activeLiEl.parentElement.parentElement.offsetHeight - activeLiEl.offsetTop - activeLiEl.offsetHeight
		];
		const percentH = [
			liElDimsH[0] / activeLiEl.parentElement.parentElement.offsetWidth * 100, 
			liElDimsH[1] / activeLiEl.parentElement.parentElement.offsetWidth * 100
		];
		const percentV = [
			liElDimsV[0] / activeLiEl.parentElement.parentElement.offsetHeight * 100, 
			liElDimsV[1] / activeLiEl.parentElement.parentElement.offsetHeight * 100
		];
		if (isMobile) {
			setTimeout(() => activeBarEl.style.top = `${percentV[0]}%`, index < prevBlockIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.bottom = `${percentV[1]}%`, index < prevBlockIndex ? 125 : 0);
		} else {
			setTimeout(() => activeBarEl.style.left = `${percentH[0]}%`, index < prevBlockIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.right = `${percentH[1]}%`, index < prevBlockIndex ? 125 : 0);
		}
		liEls.forEach(el => el.classList.remove('active'));
		liEls[index].classList.add('active');
	}

	function linkClicked(index = 0, event) {
		if (event) event.preventDefault();
		setActive(index);
		setTimeout(() => moveToBlock(index + 1));
	}

	function menuButtonClicked() {
		if (projectOpen) {
			setOpenProjectId(null);
	    window.history.pushState({
	    	type: 'main',
	      index: activeBlockIndex,
	      slug: 'work'
	    }, 'work', '/work');
		} else {
			setIsMenuOpen(!isMenuOpen);
		}
	}

  const classes = Classnames({
    'show': show,
    'is-open': isMenuOpen || projectOpen,
    'project-open': projectOpen
  });

  return (
    <nav id="nav" className={classes}>
	    <div className="menu-drawer">
	    	<ul>
		    	{/*<li className="menu-item"><a href="/news" onClick={linkClicked.bind(this, 0)}>News</a></li>*/}
		    	<li className="menu-item"><a href="/profile" onClick={linkClicked.bind(this, 0)}>Profil</a></li>
		    	<li className="menu-item"><a href="/work" onClick={linkClicked.bind(this, 1)}>Projekte</a></li>
		    	<li className="menu-item"><a href="/contact" onClick={linkClicked.bind(this, 2)}>Kontakt</a></li>
		    </ul>
		    <span className="active-bar" />
		    <Icon className="symbol symbol-white" />
		    <a href="mailto:hello@riccardolardi.com" className="email-icon">
		    	<AlternateEmailIcon fontSize="large" />
		    </a>
	    </div>
    	<button className="menu-button" onClick={menuButtonClicked}>
	      <MenuIcon className="menu-icon" fontSize="large" />
	      <CloseIcon className="close-icon" fontSize="large" />
	      <ArrowDownwardIcon className="back-icon" fontSize="large" />
	    </button>
    </nav>
  );
}

export default Nav;