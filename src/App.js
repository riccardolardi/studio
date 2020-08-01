import React from 'react';
import Classnames from 'classnames';
import { useWindowScroll } from 'react-use';
import Nav from './Nav.js';
import Header from './Header.js';
import News from './News.js';
import './App.scss';

function App() {
  const [visibleBlocks, setVisibleBlocks] = React.useState([null, null, null, null, null]);
  const { y: scrollY } = useWindowScroll();

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
        scrollY={scrollY} 
        setBlockVisibility={setBlockVisibility} 
        isScrolled={visibleBlocks[1]}
      />
      <News 
        index={1} 
        scrollY={scrollY} 
        setBlockVisibility={setBlockVisibility} 
      />
      <Nav show={!(visibleBlocks[0] && !visibleBlocks[1])} />
    </main>
  );
}

export default App;
