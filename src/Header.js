import React from 'react';
import Classnames from 'classnames';
import tweens from 'tween-functions';
import Rellax from 'rellax';
import './Header.scss';

let charAnims = [];
let chars1, chars2, appHeight, rellax;

function Header(props) {
  const [isReady, setIsReady] = React.useState(null);
  const { 
    index, 
    scrollY, 
    activeSubTitle, 
    moveToBlock, 
    active: isActive, 
    intersecting: isIntersecting 
  } = props;

  React.useLayoutEffect(() => {
    appHeight = document.querySelector('#app').offsetHeight;
    prepareCharAnim1();
    prepareCharAnim2();
    setTimeout(() => setIsReady(true), 1000);
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
    chars2.forEach((el, index) => {
      const tweenedVal = tweens.easeOutSine(scrollY, 0, appHeight * 1.5, appHeight * 1.5);
      const newVal = tweenedVal * charAnims[index][2];
      const newTranslateStyle = charAnims[index][0].replace('$', - Math.abs(newVal / 2));
      const newRotateStyle = charAnims[index][1].replace('$', newVal / 10);
      const newOpacityStyle = 1 - Math.abs(newVal / 1000);
      el.style.transform = newTranslateStyle;
      if (newVal) {
        el.querySelector('span').style.opacity = newOpacityStyle;
        el.querySelector('span').style.transition = 'unset';
      }
      el.querySelector('span').style.transform = newRotateStyle;
    });
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
    for (let i = 0; i < chars.length; i++) {
      const style = `transition: opacity 125ms ${250 + Math.random() * 500}ms`;
      if (i === 0) newContent += `<span class="char divider divider-right">
        <span style="${style}"></span></span>`;
      let nextChar = `<span class="char"><span style="${style}">${chars[i]}</span></span>`;
      if (chars[i] === ',') nextChar = '<br/>';
      if (chars[i] === ' ') nextChar = ' ';
      newContent += nextChar;
      charAnims.push([
        'translateY($px)', 
        'rotate3d(1,1,1,$deg)', 
        Math.random() - 0.5
      ]);
    }
    charAnimEl.innerHTML = newContent;
    chars2 = document.querySelectorAll('header .char-anim2 .char');
  }

  const classes = Classnames({
    'block': true,
    'is-active': isActive, 
    'is-intersecting': isIntersecting, 
    'is-ready': isReady
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
      <div className="logo">
        <span className={`logo-symbol box rellax`} data-rellax-speed="4">
          <svg height="256" width="256" viewBox="0 0 256 256">
            <rect width="256" height="256" />
          </svg>
        </span>
        <span className={`logo-symbol triangle rellax`} data-rellax-speed="1">
          <svg height="256" width="256" viewBox="0 0 256 256">
            <polygon points="128,0 0,256 256,256" />
          </svg>
        </span>
        <span className={`logo-symbol circle rellax`} data-rellax-speed="-2">
          <svg height="256" width="256" viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="128" />
          </svg>
        </span>
      </div>
      <div className="secondary-header">
        <span className="site-title bold"><a href="/">Studio<br/>Riccardo<br/>Lardi</a></span>
        <span className="site-subtitle">{activeSubTitle}</span>
      </div>
      <div className="scroll-down" onClick={() => moveToBlock(0)}>
        <span role="img" aria-label="attention" className="assembly">@</span>
        <span role="img" aria-label="scroll-down" className="assembly">N</span>
      </div>
      {/*
      <div className="emoji coming-soon">
        <label>Scroll down</label>
        <span role="img" aria-label="scroll-down">🙋‍♂️</span>
      </div>
      */}
    </header>
  );
}

export default Header;