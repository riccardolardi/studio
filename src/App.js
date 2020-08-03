import React from 'react';
import Classnames from 'classnames';
import { useWindowScroll, createBreakpoint } from 'react-use';
import Nav from './Nav.js';
import Header from './Header.js';
import News from './News.js';
import Profile from './Profile.js';
import './App.scss';

const useBreakpoint = createBreakpoint({
  mobile: 767, 
  other: 768
});

let intersectionObserver;

function App() {
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  const [introVisibility, setIntroVisibility] = React.useState(null);
  const { y: scrollY } = useWindowScroll();
  const isMobile = useBreakpoint() === 'mobile';

  React.useLayoutEffect(() => {
    intersectionObserver = new IntersectionObserver(events => {
      events.forEach(event => {
        if (event.intersectionRect.height >= event.rootBounds.height / 2) {
          const index = parseInt(event.target.getAttribute('data-index'));
          if (index === 0) setIntroVisibility(event.intersectionRect.height / event.rootBounds.height);
          setActiveBlockIndex(index);
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    Array.from(document.querySelectorAll('.block')).forEach(el => 
      intersectionObserver.observe(el));
  }, []);

  const classes = Classnames({
    'is-intro': activeBlockIndex === 0
  });

  return (
    <main id="app" className={classes}>
      <Header 
        index={0} 
        active={activeBlockIndex === 0} 
        visibility={introVisibility} 
        scrollY={scrollY} 
      />
      <News 
        index={1} 
        active={activeBlockIndex === 1} 
      />
      <Profile 
        index={2} 
        active={activeBlockIndex === 2} 
      />
      <Nav 
        show={activeBlockIndex > 0} 
        activeBlockIndex={activeBlockIndex} 
        isMobile={isMobile} 
      />
    </main>
  );
}

export default App;
