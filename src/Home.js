import React from 'react';
import Classnames from 'classnames';
import { Waypoint } from 'react-waypoint';
import './Home.scss';

function Home(props) {
  const [wpState, setWpState] = React.useState(null);

  React.useEffect(() => {
    props.setBlockVisibility(props.index, wpState);
  }, [wpState]);

  const classes = Classnames({
    'Home': true,
    'block': true,
    'waypoint': true,
  }, wpState);

  return (
    <Waypoint topOffset={1} bottomOffset={1} 
      onPositionChange={event => setWpState(event.currentPosition)}>
      <div className={classes}>

      </div>
    </Waypoint>
  );
}

export default Home;