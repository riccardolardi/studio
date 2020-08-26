import React from 'react';
import Classnames from 'classnames';
import tweens from 'tween-functions';
import Rellax from 'rellax';
import {ReactComponent as ArrowDown} from './img/icons/arrow-down.svg';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import './Header.scss';

let charAnims = [];
let chars1, chars2, appHeight, rellax;

function Header(props) {
  const [hasScrolled, setHasScrolled] = React.useState(null);
  const { 
    index, 
    scrollY, 
    moveToBlock, 
    isMenuOpen, 
    active: isActive, 
    intersecting: isIntersecting 
  } = props;

  React.useLayoutEffect(() => {
    appHeight = document.querySelector('#app').offsetHeight;
    prepareCharAnim1();
    prepareCharAnim2();
  }, []);

  React.useEffect(() => {
    if (isIntersecting) {
      rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
    } else {
      if (rellax) rellax.destroy();
    }
  }, [isIntersecting]);

  React.useEffect(() => {
    if (hasScrolled) chars2.forEach((el, index) => {
      const tweenedVal = tweens.easeOutSine(scrollY  * charAnims[index][2], 0, appHeight, appHeight);
      const newTranslateStyle = charAnims[index][0].replace('$', - Math.abs(tweenedVal / 3));
      const newRotateStyle = charAnims[index][1].replace('$', tweenedVal / 20);
      const newOpacityStyle = 1 - Math.abs(tweenedVal / 1000);
      el.style.transform = newTranslateStyle;
      el.querySelector('span').style.opacity = newOpacityStyle;
      el.querySelector('span').style.transition = 'unset';
      el.querySelector('span').style.transform = newRotateStyle;
    });
    setHasScrolled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  function prepareCharAnim1() {
    const charAnimEl = document.querySelector('#header .char-anim1');
    chars1 = charAnimEl.textContent;
    let newContent = '';
    for (let i = 0; i < chars1.length; i++) {
      const style = `transition: opacity 125ms ${250 + Math.random() * 500}ms`;
      let nextChar = `<span class="char" style="${style}">${chars1[i]}</span>`;
      if (chars1[i] === ' ') nextChar = '<br/>';
      newContent += nextChar;
    }
    charAnimEl.innerHTML = newContent;
  }

  function prepareCharAnim2() {
    const charAnimEl = document.querySelector('header .char-anim2 h2');
    const chars = charAnimEl.textContent;
    let newContent = '';
    let ftCombined = false;
    for (let i = 0; i < chars.length; i++) {
      if (ftCombined) {
        ftCombined = false;
        continue;
      }
      const style = `transition: opacity 125ms ${250 + Math.random() * 500}ms`;
      if (i === 0) newContent += `<span class="char divider divider-right">
        <span style="${style}"></span></span>`;
      ftCombined = chars[i] === 'f' && chars[i + 1] === 't';
      let nextChar = `<span class="char"><span style="${style}">${
        ftCombined ? 'ft' : chars[i]
      }</span></span>`;
      if (chars[i] === ',') nextChar = '<br/>';
      if (chars[i] === ' ') nextChar = ' ';
      newContent += nextChar;
      charAnims.push([
        'translateY($px)', 
        'rotate3d(1,1,1,$deg)', 
        (Math.random() * (1 - 0.2) + 0.2) * (Math.round(Math.random() * 2) === 1 ? -1 : 1)
      ]);
    }
    charAnimEl.innerHTML = newContent;
    chars2 = document.querySelectorAll('header .char-anim2 .char');
  }

  const classes = Classnames({
    'block': true,
    'is-active': isActive, 
    'is-intersecting': isIntersecting,
    'menu-open': isMenuOpen
  });

  return (
    <header id="header" className={classes} data-index={index}>
      <h1 className="char-anim1 bold">Studio Riccardo Lardi</h1>
      <div className="char-anim2">
        <h2>
          Interaction Design,
          Media Architecture,
          Software & Web
        </h2>
      </div>
      <div className="contact-link">
        <a href="/contact" aria-label="contact-link" onClick={e => {e.preventDefault(); moveToBlock(3);}}>
          <AlternateEmailIcon fontSize="large" />
        </a>
      </div>
      <div className="logo">
        <span className={`logo-symbol box rellax`} data-rellax-speed={4}>
          <svg height="256" width="256" viewBox="0 0 256 256">
            <rect width="256" height="256" />
          </svg>
        </span>
        <span className={`logo-symbol triangle rellax`} data-rellax-speed={1}>
          <svg height="256" width="256" viewBox="0 0 256 256">
            <polygon points="128,0 0,256 256,256" />
          </svg>
        </span>
        <span className={`logo-symbol circle rellax`} data-rellax-speed={-2}>
          <svg height="256" width="256" viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="128" />
          </svg>
        </span>
      </div>
      <div className="secondary-header">
        <span className="site-title bold"><a href="/">Studio<br/>Riccardo<br/>Lardi</a></span>
      </div>
      <ArrowDown className="scroll-down" />
      <span className="scroll-down-label">Scroll down!</span>
    </header>
  );
}

export default Header;