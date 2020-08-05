import React from 'react';
import Classnames from 'classnames';
import { useWindowScroll, createBreakpoint, usePrevious } from 'react-use';
import { isSafari, isMobileSafari, isMobile as isTouch } from 'react-device-detect';
import { scrollTo } from './functions.js';
import Nav from './Nav.js';
import Header from './Header.js';
import News from './News.js';
import Profile from './Profile.js';
import Work from './Work.js';
import Contact from './Contact.js';
import './App.scss';

const useBreakpoint = createBreakpoint({
  mobile: 767, 
  other: 768
});

let intersectionObserver, blockEls;

function App() {
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  const [prevIsIntro, setPrevIsIntro] = React.useState(null);
  const [intersectingBlockIndexes, setIntersectingBlockIndexes] = React.useState([]);
  const [activeSubTitle, setActiveSubTitle] = React.useState(null);
  const [introVisibility, setIntroVisibility] = React.useState(null);
  const [navigatingDir, setNavigatingDir] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(null);

  const MobileSafariFix = React.lazy(() => import('./MobileSafariFix.js'));
  const SafariFix = React.lazy(() => import('./SafariFix.js'));

  const prevBlockIndex = usePrevious(activeBlockIndex);
  const { y: scrollY } = useWindowScroll();
  const isMobile = useBreakpoint() === 'mobile';

  React.useLayoutEffect(() => {
    blockEls = Array.from(document.querySelectorAll('.block'));
    intersectionObserver = new IntersectionObserver(events => {
      events.forEach(event => {
        const index = parseInt(event.target.getAttribute('data-index'));
        setIntersectingBlockIndexes(indexes => {
          if (event.isIntersecting) {
            if (indexes.includes(index)) return indexes;
            return [...indexes, index];
          }
          return indexes.filter(el => el !== index);
        });
        if (event.intersectionRect.height >= event.rootBounds.height * 0.5) {
          const newSubtitle = blockEls[index].querySelector('h3')?.textContent;
          if (index === 0) setIntroVisibility(event.intersectionRect.height / event.rootBounds.height);
          if (newSubtitle) setActiveSubTitle(newSubtitle);
          setActiveBlockIndex(index);
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    blockEls.forEach(el => intersectionObserver.observe(el));
  }, []);

  React.useEffect(() => {
    setPrevIsIntro(prevBlockIndex === 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBlockIndex]);

  function moveToBlock(index) {
    const newNavDir = index > activeBlockIndex - 1 ? 'down' : 'up';
    setNavigatingDir(newNavDir);
    const elTop = blockEls[index + 1]?.offsetTop;
    const offset = index + 2 < blockEls.length ? window.innerHeight * 0.225 : 0;
    setTimeout(() => {
      scrollTo(elTop - offset, !isSafari, () => {
        setNavigatingDir(null);
        if (isMobile) setIsMenuOpen(false);
      });
    }, 125);
  }

  const classes = Classnames({
    'is-intro': activeBlockIndex === 0,
    'menu-open': isMenuOpen, 
    'navigating-down': navigatingDir === 'down', 
    'navigating-up': navigatingDir === 'up',
    'navigating': navigatingDir !== null
  });

  return (
    <main id="app" className={classes}>
      <Header 
        index={0} 
        active={activeBlockIndex === 0} 
        intersecting={intersectingBlockIndexes.includes(0)} 
        activeSubTitle={activeSubTitle} 
        visibility={introVisibility} 
        isTouch={isTouch} 
        scrollY={scrollY} 
        moveToBlock={moveToBlock} 
      />
      <News 
        index={1} 
        active={activeBlockIndex === 1} 
        intersecting={intersectingBlockIndexes.includes(1)} 
        prevBlockIndex={prevBlockIndex} 
        prevIsIntro={prevIsIntro} 
      />
      <Profile 
        index={2} 
        active={activeBlockIndex === 2} 
        intersecting={intersectingBlockIndexes.includes(2)} 
      />
      <Work 
        index={3} 
        active={activeBlockIndex === 3} 
        intersecting={intersectingBlockIndexes.includes(3)} 
      />
      <Contact 
        index={4} 
        active={activeBlockIndex === 4} 
        intersecting={intersectingBlockIndexes.includes(4)} 
      />
      <Nav 
        show={activeBlockIndex > 0} 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        activeBlockIndex={activeBlockIndex} 
        isMobile={isMobile} 
        moveToBlock={moveToBlock} 
        isNavigating={navigatingDir !== null} 
      />
      <React.Suspense fallback={null}>
        {isMobileSafari && <MobileSafariFix />}
        {isSafari && <SafariFix />}
      </React.Suspense>
    </main>
  );
}

export default App;
