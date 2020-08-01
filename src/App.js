import React from 'react';
import Classnames from 'classnames';
import Intro from './Intro.js';
import Home from './Home.js';
import './App.scss';

function App() {
  const [visibleBlocks, setVisibleBlocks] = React.useState([null, null, null, null, null]);

  function setBlockVisibility(index, visibility) {
    const val = visibility === 'inside' ? true : false;
    const newVisibleBlocks = 
      visibleBlocks.map((el, elIndex) => elIndex === index ? val : el);
    setVisibleBlocks(newVisibleBlocks);
  }

  const classes = Classnames({
    'App': true
  });

  return (
    <div className={classes}>
      <Intro 
        index={0} 
        setBlockVisibility={setBlockVisibility} 
        pastIntro={visibleBlocks[1]} 
      />
      {<Home 
        index={1} 
        setBlockVisibility={setBlockVisibility} 
      />}
    </div>
  );
}

export default App;
