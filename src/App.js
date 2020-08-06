import React from 'react';
import Classnames from 'classnames';
import { 
  useWindowScroll, 
  createBreakpoint, 
  usePrevious, 
  useDebounce
 } from 'react-use';
import { 
  isSafari, 
  isMobileSafari, 
  isMobile as isTouch 
} from 'react-device-detect';
import { 
  scrollTo, 
  trimSlashes 
} from './functions.js';
import Nav from './Nav.js';
import Header from './Header.js';
import News from './News.js';
import Profile from './Profile.js';
import Work from './Work.js';
import Contact from './Contact.js';
import './App.scss';

const useBreakpoint = createBreakpoint({
  mobile: 768, 
  other: 769
});

let intersectionObserver, blockEls;
const slugs = ['/', 'news', 'profile', 'work', 'contact'];

function App() {
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  const [prevIsIntro, setPrevIsIntro] = React.useState(null);
  const [intersectingBlockIndexes, setIntersectingBlockIndexes] = React.useState([]);
  const [activeSubTitle, setActiveSubTitle] = React.useState(null);
  const [navigatingDir, setNavigatingDir] = React.useState(null);
  const [statePopped, setStatePopped] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(null);

  const MobileSafariFix = React.lazy(() => import('./MobileSafariFix.js'));
  const SafariFix = React.lazy(() => import('./SafariFix.js'));

  const prevBlockIndex = usePrevious(activeBlockIndex);
  const { y: scrollY } = useWindowScroll();
  const isMobile = useBreakpoint() === 'mobile';

  useDebounce(() => {
    if (statePopped) {
      setStatePopped(false);
      return;
    }
    window.history.pushState({
      index: activeBlockIndex,
      slug: slugs[activeBlockIndex]
    }, slugs[activeBlockIndex], slugs[activeBlockIndex]);
  }, 500, [activeBlockIndex]);

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
          if (newSubtitle) setActiveSubTitle(newSubtitle);
          setActiveBlockIndex(index);
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    blockEls.forEach(el => intersectionObserver.observe(el));
    moveToBlock(slugs.indexOf(trimSlashes(window.location.pathname)), true);
    window.addEventListener('popstate', event => onHistoryPopState(event));
  }, []);

  React.useEffect(() => {
    setPrevIsIntro(prevBlockIndex === 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBlockIndex]);

  function onHistoryPopState(event) {
    setStatePopped(true);
    moveToBlock(event.state.index, true);
  }

  function moveToBlock(index, force = false) {
    if (index < 0) return;
    const newNavDir = index > activeBlockIndex ? 'down' : 'up';
    setNavigatingDir(newNavDir);
    const elTop = blockEls[index]?.offsetTop;
    const offset = index + 1 < blockEls.length ? window.innerHeight * 0.2 : 0;
    setTimeout(() => {
      scrollTo(elTop - offset, !force && !isSafari, () => {
        setNavigatingDir(null);
        setActiveBlockIndex(index);
        if (window.innerWidth <= 768) setIsMenuOpen(false);
      });
    }, 125);
  }

  const classes = Classnames({
    'is-intro': activeBlockIndex === 0,
    'past-intro': activeBlockIndex > 0,
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
