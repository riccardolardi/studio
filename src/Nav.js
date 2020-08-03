import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Classnames from 'classnames';
import './Nav.scss';

let activeBarEl, liEls;

function Nav(props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(null);
	const { activeBlockIndex, isMobile, show } = props;

	React.useLayoutEffect(() => {
		activeBarEl = document.querySelector('nav .active-bar');
		liEls = document.querySelectorAll('nav li');
	}, []);

	React.useEffect(() => {
		setActive(activeIndex);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	React.useEffect(() => {
		if (activeBlockIndex === 0) {
			setIsOpen(false);
			return;
		}
		setActive(activeBlockIndex - 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeBlockIndex]);

	function setActive(index = 0, event) {
		if (event) event.preventDefault();
		const activeLiEl = liEls[index];
		if (!activeLiEl) return;
		const liElDimsH = 
			[activeLiEl.offsetLeft, activeLiEl.parentElement.parentElement.offsetWidth - 
				activeLiEl.offsetLeft - activeLiEl.offsetWidth];
		const liElDimsV = 
			[activeLiEl.offsetTop, activeLiEl.parentElement.parentElement.offsetHeight - 
				activeLiEl.offsetTop - activeLiEl.offsetHeight];
		if (isMobile) {
			setTimeout(() => activeBarEl.style.top = `${liElDimsV[0]}px`, index < activeIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.bottom = `${liElDimsV[1]}px`, index < activeIndex ? 125 : 0);
		} else {
			setTimeout(() => activeBarEl.style.left = `${liElDimsH[0]}px`, index < activeIndex ? 0 : 125);
			setTimeout(() => activeBarEl.style.right = `${liElDimsH[1]}px`, index < activeIndex ? 125 : 0);
		}
		setActiveIndex(index);
		liEls.forEach(el => el.classList.remove('active'));
		liEls[index].classList.add('active');
	}

  const classes = Classnames({
    'show': show,
    'is-open': isOpen
  });

  return (
    <nav id="nav" className={classes}>
	    <div className="menu-drawer">
	    	<span className="site-title">Studio<br/>Riccardo<br/>Lardi</span>
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