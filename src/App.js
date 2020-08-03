import React from 'react';
import Classnames from 'classnames';
import { useWindowScroll, createBreakpoint } from 'react-use';
import Nav from './Nav.js';
import Header from './Header.js';
import News from './News.js';
import Profile from './Profile.js';
import Work from './Work.js';
import './App.scss';

const useBreakpoint = createBreakpoint({
  mobile: 767, 
  other: 768
});

let intersectionObserver, blockEls;

function App() {
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  const [activeSubTitle, setActiveSubTitle] = React.useState(null);
  const [introVisibility, setIntroVisibility] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(null);
  const { y: scrollY } = useWindowScroll();
  const isMobile = useBreakpoint() === 'mobile';

  React.useLayoutEffect(() => {
    blockEls = Array.from(document.querySelectorAll('.block'));
    intersectionObserver = new IntersectionObserver(events => {
      events.forEach(event => {
        if (event.intersectionRect.height >= event.rootBounds.height * 0.5) {
          const index = parseInt(event.target.getAttribute('data-index'));
          const newSubtitle = blockEls[index].querySelector('h3')?.textContent;
          if (index === 0) setIntroVisibility(event.intersectionRect.height / event.rootBounds.height);
          if (newSubtitle) setActiveSubTitle(newSubtitle);
          setActiveBlockIndex(index);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    blockEls.forEach(el => 
      intersectionObserver.observe(el));
  }, []);

  const classes = Classnames({
    'is-intro': activeBlockIndex === 0,
    'menu-open': isMenuOpen
  });

  return (
    <main id="app" className={classes}>
      <Header 
        index={0} 
        active={activeBlockIndex === 0} 
        activeSubTitle={activeSubTitle} 
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
      <Work 
        index={3} 
        active={activeBlockIndex === 3} 
      />
      <Nav 
        show={activeBlockIndex > 0} 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        activeBlockIndex={activeBlockIndex} 
        isMobile={isMobile} 
      />
    </main>
  );
}

export default App;
