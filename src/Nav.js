import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {ReactComponent as Icon} from './img/icons/wave-round.svg';
import Classnames from 'classnames';
import './Nav.scss';

let activeBar1El, activeBar2El, menuLiEls, langLiEls;

function Nav(props) {
	const {
		activeBlockIndex, 
		show, 
		isMenuOpen, 
		projectOpen, 
		setOpenProjectId, 
		setIsMenuOpen, 
		activeLang, 
		setActiveLang, 
		moveToBlock, 
		prevBlockIndex, 
		data 
	} = props;

	React.useLayoutEffect(() => {
		activeBar1El = document.querySelector('nav .active-bar-1');
		activeBar2El = document.querySelector('nav .active-bar-2');
		menuLiEls = document.querySelectorAll('nav li.menu-item');
		langLiEls = document.querySelectorAll('nav li.lang-item');
	}, []);

	React.useEffect(() => {
		if (activeBlockIndex === 0) {
			setIsMenuOpen(false);
		}
		setActiveItem(activeBlockIndex - 1, menuLiEls);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeBlockIndex]);

	React.useEffect(() => {
		setActiveItem(activeLang, langLiEls);
		setActiveItem(activeBlockIndex - 1, menuLiEls, true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeLang]);

	function setActiveItem(index = 0, liEls, force = false) {
		const activeLiEl = liEls[index];
		const activeBar = liEls === menuLiEls ? activeBar1El : activeBar2El;
		const delay = force ? 0 : 125;
		let dir;
		if (liEls === menuLiEls) dir = index < prevBlockIndex ? 'left' : 'right';
		if (liEls === langLiEls) dir = index === 0 ? 'left' : 'right';
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
		if (window.innerWidth <= 768) {
			setTimeout(() => activeBar.style.top = `${percentV[0]}%`, dir === 'left' ? 0 : delay);
			setTimeout(() => activeBar.style.bottom = `${percentV[1]}%`, dir === 'left' ? delay : 0);
		} else {
			setTimeout(() => activeBar.style.left = `${percentH[0]}%`, dir === 'left' ? 0 : delay);
			setTimeout(() => activeBar.style.right = `${percentH[1]}%`, dir === 'left' ? delay : 0);
		}
	}

	function linkClicked(index = 0, event) {
		if (event) event.preventDefault();
		setActiveItem(index, menuLiEls);
		setTimeout(() => moveToBlock(index + 1));
	}

	function menuButtonClicked() {
		setActiveItem(activeLang, langLiEls, true); // why tho
		setActiveItem(activeBlockIndex - 1, menuLiEls, true); // why tho
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
		    	<li className="menu-item"><a href="/profile" onClick={linkClicked.bind(this, 0)}>{data.nav.Profile[activeLang]}</a></li>
		    	<li className="menu-item"><a href="/work" onClick={linkClicked.bind(this, 1)}>{data.nav.Work[activeLang]}</a></li>
		    	<li className="menu-item"><a href="/contact" onClick={linkClicked.bind(this, 2)}>{data.nav.Contact[activeLang]}</a></li>
		    	<li className="lang-item lang-de"><button onClick={() => setActiveLang(0)}>DE</button></li>
		    	<li className="lang-item lang-en"><button onClick={() => setActiveLang(1)}>EN</button></li>
		    </ul>
		    <span className="active-bar-1" />
		    <span className="active-bar-2" />
		    <Icon className="symbol symbol-white" />
		    <a href="mailto:hello@riccardolardi.com" className="email-icon">
		    	<AlternateEmailIcon fontSize="large" />
		    </a>
	    </div>
    	<button className="menu-button" aria-label="menu-button" onClick={menuButtonClicked}>
	      <MenuIcon className="menu-icon" fontSize="large" />
	      <CloseIcon className="close-icon" fontSize="large" />
	      <ArrowDownwardIcon className="back-icon" fontSize="large" />
	    </button>
    </nav>
  );
}

export default Nav;