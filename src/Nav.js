import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
		const liElDimsH = 
			[activeLiEl.offsetLeft, activeLiEl.parentElement.parentElement.offsetWidth - 
				activeLiEl.offsetLeft - activeLiEl.offsetWidth];
		const liElDimsV = 
			[activeLiEl.offsetTop, activeLiEl.parentElement.parentElement.offsetHeight - 
				activeLiEl.offsetTop - activeLiEl.offsetHeight];
		if (isMobile) {
			setTimeout(() => activeBarEl.style.top = `${liElDimsV[0] - 2}px`, index < prevBlockIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.bottom = `${liElDimsV[1]}px`, index < prevBlockIndex ? 125 : 0);
		} else {
			setTimeout(() => activeBarEl.style.left = `${liElDimsH[0]}px`, index < prevBlockIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.right = `${liElDimsH[1]}px`, index < prevBlockIndex ? 125 : 0);
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
		    	<li className="menu-item"><a href="/news" onClick={linkClicked.bind(this, 0)}>News</a></li>
		    	<li className="menu-item"><a href="/profile" onClick={linkClicked.bind(this, 1)}>Profil</a></li>
		    	<li className="menu-item"><a href="/work" onClick={linkClicked.bind(this, 2)}>Projekte</a></li>
		    	<li className="menu-item"><a href="/contact" onClick={linkClicked.bind(this, 3)}>Kontakt</a></li>
		    </ul>
		    <span className="active-bar" />
	    </div>
    	<button className="menu-button" onClick={menuButtonClicked}>
	      <MenuIcon className="menu-icon" fontSize='large' />
	      <CloseIcon className="close-icon" fontSize='large' />
	      <ArrowBackIcon className="back-icon" fontSize='large' />
	    </button>
    </nav>
  );
}

export default Nav;