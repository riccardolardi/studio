import React from 'react';
import Classnames from 'classnames';
import { 
  clearAllBodyScrollLocks, 
  disableBodyScroll 
} from 'body-scroll-lock';
import { 
  useWindowScroll, 
  usePrevious, 
  useDebounce
 } from 'react-use';
import { useThrottle } from 'use-throttle';
import { 
  trimSlashes, 
  getBrowserLocales 
} from './functions.js';
import Nav from './Nav.js';
import Header from './Header.js';
// import News from './News.js';
import Profile from './Profile.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Project from './Project.js';
import './App.scss';

const data = require('./data.json');

let intersectionObserver, blockEls;
const slugs = ['/', 'profile', 'work', 'contact'];

function App() {
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  const [prevIsIntro, setPrevIsIntro] = React.useState(null);
  const [intersectingBlockIndexes, setIntersectingBlockIndexes] = React.useState([]);
  const [navigatingDir, setNavigatingDir] = React.useState(null);
  const [activeLang, setActiveLang] = React.useState(null);
  const [statePopped, setStatePopped] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(null);
  const [openProjectId, setOpenProjectId] = React.useState(null);
  const prevBlockIndex = usePrevious(activeBlockIndex);
  const { y: scrollY } = useWindowScroll();
  const throttledScrollY = useThrottle(scrollY, 5);

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
  }, 500, [throttledScrollY]);

  React.useLayoutEffect(() => {
    blockEls = Array.from(document.querySelectorAll('.block'));
    intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.getAttribute('data-index'));
        setIntersectingBlockIndexes(indexes => {
          if (entry.isIntersecting) {
            if (indexes.includes(index)) return indexes;
            return [...indexes, index];
          }
          return indexes.filter(el => el !== index);
        });
        if (entry.intersectionRect.height >= entry.rootBounds.height * 0.5) {
          setActiveBlockIndex(index);
        }
      });
    }, {
      threshold: Array.from({length: 100}, (x, i) => i * 0.01)
    });
    blockEls.forEach(el => intersectionObserver.observe(el));
    moveToBlock(slugs.indexOf(trimSlashes(window.location.pathname)));
    if (window.location.pathname.includes('/work/')) {
      const projectSlug = window.location.pathname.replace('/work/', '');
      const projectIndex = document.querySelector('#work article[data-slug="'+projectSlug+'"]').getAttribute('data-index');
      setOpenProjectId(parseInt(projectIndex));
    }
    window.addEventListener('popstate', event => onHistoryPopState(event));
    setActiveLang(getBrowserLocales({languageCodeOnly: true})[0] === 'de' ? 0 : 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setPrevIsIntro(prevBlockIndex === 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBlockIndex]);

  React.useEffect(() => {
    document.documentElement.lang = activeLang === 0 ? 'de' : 'en';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLang]);

  React.useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 768) {
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
    moveToBlock(event.state.type === 'main' ? event.state.index : 3);
    setOpenProjectId(event.state.type === 'project' ? event.state.index : null);
  }

  function moveToBlock(index) {
    if (index < 0) return;
    const newNavDir = index > activeBlockIndex ? 'down' : 'up';
    setNavigatingDir(newNavDir);
    const elTop = blockEls[index]?.offsetTop;
    const offset = index + 1 < blockEls.length && index > 0 ? 
      (window.innerWidth <= 768 ? 0 : window.innerHeight * 0.3) : 0;
    setTimeout(() => {
      console.log(window.innerWidth <= 768)
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
        scrollY={throttledScrollY} 
        moveToBlock={moveToBlock} 
        isMenuOpen={isMenuOpen} 
      />
      {/*<News 
        index={1} 
        active={activeBlockIndex === 1} 
        intersecting={intersectingBlockIndexes.includes(1)} 
        prevIsIntro={prevIsIntro} 
      />*/}
      <Profile 
        index={1} 
        active={activeBlockIndex === 1} 
        intersecting={intersectingBlockIndexes.includes(1)} 
        moveToBlock={moveToBlock} 
        prevIsIntro={prevIsIntro} 
        activeLang={activeLang} 
        data={data} 
      />
      <Work 
        index={2} 
        active={activeBlockIndex === 2} 
        intersecting={intersectingBlockIndexes.includes(2)} 
        setOpenProjectId={setOpenProjectId} 
        activeLang={activeLang} 
        data={data} 
      />
      <Contact 
        index={3} 
        active={activeBlockIndex === 3} 
        intersecting={intersectingBlockIndexes.includes(3)} 
      />
      {openProjectId !== null && <Project 
        openProjectId={openProjectId} 
        activeLang={activeLang} 
        data={data} 
      />}
      <Nav 
        show={activeBlockIndex > 0} 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        activeBlockIndex={activeBlockIndex} 
        activeLang={activeLang} 
        setActiveLang={setActiveLang} 
        moveToBlock={moveToBlock} 
        projectOpen={openProjectId !== null} 
        setOpenProjectId={setOpenProjectId} 
        prevBlockIndex={prevBlockIndex} 
        data={data} 
      />
    </main>
  );
}

export default App;
