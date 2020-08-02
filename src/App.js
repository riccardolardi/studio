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

function App() {
  const [activeBlockIndex, setActiveBlockIndex] = React.useState(null);
  const [visibleBlocks, setVisibleBlocks] = React.useState([null, null, null, null, null]);
  const { y: scrollY } = useWindowScroll();
  const isMobile = useBreakpoint() === 'mobile';

  React.useEffect(() => {
    setActiveBlockIndex(visibleBlocks.lastIndexOf(true));
  }, [visibleBlocks]);

  function setBlockVisibility(index, visibility) {
    const val = visibility === 'inside' ? true : false;
    const newVisibleBlocks = 
      visibleBlocks.map((el, elIndex) => elIndex === index ? val : el);
    setVisibleBlocks(newVisibleBlocks);
  }

  const classes = Classnames({
    'is-intro': visibleBlocks[0] && !visibleBlocks[1],
    'is-news': visibleBlocks[0] && visibleBlocks[1]
  });

  return (
    <main id="app" className={classes}>
      <Header 
        index={0} 
        active={activeBlockIndex === 0} 
        scrollY={scrollY} 
        setBlockVisibility={setBlockVisibility} 
        isScrolled={visibleBlocks[1]}
      />
      <News 
        index={1} 
        active={activeBlockIndex === 1} 
        setBlockVisibility={setBlockVisibility} 
      />
      <Profile 
        index={2} 
        active={activeBlockIndex === 2} 
        setBlockVisibility={setBlockVisibility} 
      />
      <Nav 
        show={!(visibleBlocks[0] && !visibleBlocks[1])} 
        activeBlockIndex={activeBlockIndex} 
        isMobile={isMobile} 
      />
    </main>
  );
}

export default App;
