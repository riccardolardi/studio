import React from 'react';
import Classnames from 'classnames';
import {useWindowScroll} from 'react-use';
import { Waypoint } from 'react-waypoint';
import './Intro.scss';

const charAnims = [];

function Intro(props) {
  const [wpState, setWpState] = React.useState(null);
  const [mounted, setMounted] = React.useState(false);
  const charAnimRef1 = React.useRef(null);
  const charAnimRef2 = React.useRef(null);
  const { y } = useWindowScroll();

  React.useLayoutEffect(() => {
    prepareCharAnim1();
    prepareCharAnim2();
    setTimeout(() => setMounted(true), 1000);
  }, []);

  React.useEffect(() => {
    props.setBlockVisibility(props.index, wpState);
  }, [wpState]);

  React.useEffect(() => {
    charAnimRef2.current.querySelectorAll('.char').forEach((el, index) => {
      const newVal = charAnims[index][2] + y * charAnims[index][3];
      const newTranslateStyle = charAnims[index][0].replace('$', - Math.abs(newVal));
      const newRotateStyle = charAnims[index][1].replace('$', newVal / 10);
      const newOpacityStyle = 1 - Math.abs(newVal / 500);
      el.style.transform = newTranslateStyle;
      if (newVal) {
        el.querySelector('span').style.opacity = newOpacityStyle;
        el.querySelector('span').style.transition = 'unset';
      }
      el.querySelector('span').style.transform = newRotateStyle;
    });
  }, [y]);

  function prepareCharAnim1() {
    const chars = charAnimRef1.current.textContent;
    let newContent = '';
    for (let i = 0; i < chars.length; i++) {
      const style = `transition: opacity 250ms ${Math.random() * 500}ms`;
      let nextChar = `<span class="char" style="${style}">${chars[i]}</span>`;
      if (chars[i] === ' ') nextChar = '<br/>';
      newContent += nextChar;
    }
    charAnimRef1.current.innerHTML = newContent;
  }

  function prepareCharAnim2() {
    const chars = charAnimRef2.current.textContent;
    let newContent = '';
    for (let i = 0; i < chars.length; i++) {
      const style = `transition: opacity 250ms ${500 + Math.random() * 500}ms`;
      let nextChar = `<span class="char"><span style="${style}">${chars[i]}</span></span>`;
      if (chars[i] === ',') nextChar = '<br/>';
      if (chars[i] === ' ') nextChar = ' ';
      newContent += nextChar;
      charAnims.push([
        'translateY($px)', 
        'rotate3d(1,1,1,$deg)', 
        0, 
        Math.random() - 0.5
      ]);
    }
    charAnimRef2.current.innerHTML = newContent;
  }

  const classes = Classnames({
    'Intro': true,
    'block': true,
    'waypoint': true,
    'past': props.pastIntro,
    'mounted': mounted
  }, wpState);

  return (
    <Waypoint topOffset={1} bottomOffset={1} 
      onPositionChange={event => setWpState(event.currentPosition)}>
      <div className={classes}>
        <h1 className="char-anim1" ref={charAnimRef1}>Studio Riccardo Lardi</h1>
        <div className="char-anim2">
          <div className="inner" ref={charAnimRef2}>
            Interaction Design,
            Media Architecture,
            Software 'n Web
          </div>
        </div>
        <div className="logo">
          <span className="logo-symbol box">
            <svg height="256" width="256" viewBox="0 0 256 256">
              <rect width="256" height="256" />
            </svg>
          </span>
          <span className="logo-symbol triangle">
            <svg height="256" width="256" viewBox="0 0 256 256">
              <polygon points="128,0 0,256 256,256" />
            </svg>
          </span>
          <span className="logo-symbol circle">
            <svg height="256" width="256" viewBox="0 0 256 256">
              <circle cx="128" cy="128" r="128" />
            </svg>
          </span>
        </div>
        <span className="contact-link">
          <a href="mailto:hello@riccardolardi.com">@</a>
        </span>
        <div className="emoji coming-soon">
          <div className="inner">
            <span>🙋‍♂️</span>
            <label>Coming soon</label>
          </div>
        </div>
      </div>
    </Waypoint>
  );
}

export default Intro;