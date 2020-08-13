import React from 'react';
import Classnames from 'classnames';
import { 
  clearAllBodyScrollLocks, 
  disableBodyScroll 
} from 'body-scroll-lock';
import { 
  useWindowScroll, 
  createBreakpoint, 
  usePrevious, 
  useDebounce
 } from 'react-use';
import { trimSlashes } from './functions.js';
import Nav from './Nav.js';
import Header from './Header.js';
import News from './News.js';
import Profile from './Profile.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Project from './Project.js';
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
  const [navigatingDir, setNavigatingDir] = React.useState(null);
  const [statePopped, setStatePopped] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(null);
  const [openProjectId, setOpenProjectId] = React.useState(null);

  const prevBlockIndex = usePrevious(activeBlockIndex);
  const { y: scrollY } = useWindowScroll();
  const isMobile = useBreakpoint() === 'mobile';

  useDebounce(() => {
    if (statePopped) {
      setStatePopped(false);
      return;
    }
    if (trimSlashes(window.location.pathname) !== slugs[activeBlockIndex] && 
      !window.location.pathname.includes('/work/')) {
      window.history.pushState({
        type: 'main',
        index: activeBlockIndex,
        slug: slugs[activeBlockIndex]
      }, slugs[activeBlockIndex], 
        activeBlockIndex > 0 ? '/' + slugs[activeBlockIndex] : slugs[activeBlockIndex]);
    }
  }, 500, [scrollY]);

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
          setActiveBlockIndex(index);
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    blockEls.forEach(el => intersectionObserver.observe(el));
    moveToBlock(slugs.indexOf(trimSlashes(window.location.pathname)), true);
    if (window.location.pathname.includes('/work/')) {
      const projectSlug = window.location.pathname.replace('/work/', '');
      const projectIndex = Array.from(document.querySelectorAll('#work article')).findIndex(el => {
        return el.querySelector('a').getAttribute('href').replace('/work/', '') === projectSlug;
      });
      setOpenProjectId(projectIndex);
    }
    window.addEventListener('popstate', event => onHistoryPopState(event));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setPrevIsIntro(prevBlockIndex === 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBlockIndex]);

  React.useEffect(() => {
    if (isMenuOpen && isMobile) {
      disableBodyScroll(document.querySelector('#nav'));
    } else if (openProjectId !== null) {
      disableBodyScroll(document.querySelector('#project'));
    } else {
      clearAllBodyScrollLocks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen, openProjectId]);

  function onHistoryPopState(event) {
    setStatePopped(true);
    moveToBlock(event.state.type === 'main' ? event.state.index : 3, true);
    setOpenProjectId(event.state.type === 'project' ? event.state.index : null);
  }

  function moveToBlock(index, force = false) {
    if (index < 0) return;
    const newNavDir = index > activeBlockIndex ? 'down' : 'up';
    setNavigatingDir(newNavDir);
    const elTop = blockEls[index]?.offsetTop;
    const offset = index + 1 < blockEls.length && index > 0 ? 
      (isMobile ? window.innerHeight * 0.15 : window.innerHeight * 0.3) : 0;
    setTimeout(() => {
      window.scrollTo(0, elTop - offset);
      setNavigatingDir(null);
      if (window.innerWidth <= 768) setTimeout(() => setIsMenuOpen(false), 125);
    }, 125);
  }

  const classes = Classnames({
    'is-intro': activeBlockIndex === 0,
    'past-intro': activeBlockIndex > 0,
    'menu-open': isMenuOpen, 
    'project-open': openProjectId !== null, 
    'navigating-down': navigatingDir === 'down', 
    'navigating-up': navigatingDir === 'up'
  });

  return (
    <main id="app" className={classes}>
      <Header 
        index={0} 
        active={activeBlockIndex === 0} 
        intersecting={intersectingBlockIndexes.includes(0)} 
        scrollY={scrollY} 
        isMenuOpen={isMenuOpen} 
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
        moveToBlock={moveToBlock} 
      />
      <Work 
        index={3} 
        active={activeBlockIndex === 3} 
        intersecting={intersectingBlockIndexes.includes(3)} 
        setOpenProjectId={setOpenProjectId} 
      />
      <Contact 
        index={4} 
        active={activeBlockIndex === 4} 
        intersecting={intersectingBlockIndexes.includes(4)} 
      />
      {openProjectId !== null && <Project 
        openProjectId={openProjectId} 
      />}
      <Nav 
        show={activeBlockIndex > 0} 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        activeBlockIndex={activeBlockIndex} 
        isMobile={isMobile} 
        moveToBlock={moveToBlock} 
        projectOpen={openProjectId !== null} 
        setOpenProjectId={setOpenProjectId} 
        prevBlockIndex={prevBlockIndex} 
      />
    </main>
  );
}

export default App;
