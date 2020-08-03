import React from 'react';
import Classnames from 'classnames';
import tweens from 'tween-functions';
import './Header.scss';

const charAnims = [];
let headerHeight, chars1, chars2;

function Header(props) {
  const [isReady, setIsReady] = React.useState(null);
  const { index, scrollY, visibility, activeSubTitle, active: isActive } = props;

  React.useLayoutEffect(() => {
    headerHeight = document.querySelector('header').offsetHeight;  
    prepareCharAnim1();
    prepareCharAnim2();
    setTimeout(() => setIsReady(true), 1000);
  }, []);

  React.useEffect(() => {
    chars2.forEach((el, index) => {
      const tweenedVal = tweens.easeInQuad(scrollY, 0, headerHeight, 300);
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
      const style = `transition: opacity 125ms ${500 + Math.random() * 500}ms`;
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
      const style = `transition: opacity 125ms ${500 + 500 + Math.random() * 500}ms`;
      if (i === 0) newContent += `<span class="char divider divider-top divider-right">
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
    'is-ready': isReady
  });

  return (
    <header id="header" className={classes} data-index={index}>
      <h1 className="char-anim1">Studio Riccardo Lardi</h1>
      <div className="char-anim2">
        <h2>
          Interaction Design,
          Media Architecture,
          Software & Web
        </h2>
      </div>
      <div className="logo">
        <span className={`logo-symbol box ${visibility < 0.8 ? 'gone' : ''}`}>
          <svg height="256" width="256" viewBox="0 0 256 256">
            <rect width="256" height="256" />
          </svg>
        </span>
        <span className={`logo-symbol triangle ${visibility < 0.7 ? 'gone' : ''}`}>
          <svg height="256" width="256" viewBox="0 0 256 256">
            <polygon points="128,0 0,256 256,256" />
          </svg>
        </span>
        <span className={`logo-symbol circle ${visibility < 0.6 ? 'gone' : ''}`}>
          <svg height="256" width="256" viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="128" />
          </svg>
        </span>
      </div>
      <div className="secondary-header">
        <span className="site-title">Studio<br/>Riccardo<br/>Lardi</span>
        <span className="site-subtitle">{activeSubTitle}</span>
      </div>
      <div className="emoji coming-soon">
        <label>Scroll down</label>
        <span role="img" aria-label="scroll-down">🙋‍♂️</span>
      </div>
    </header>
  );
}

export default Header;