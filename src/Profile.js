import React from 'react';
import Classnames from 'classnames';
import tweens from 'tween-functions';
import { Waypoint } from 'react-waypoint';
import './Profile.scss';

let profileEl;

function Profile(props) {
  const [wpState, setWpState] = React.useState(null);
  const [isReady, setIsReady] = React.useState(null);

  React.useLayoutEffect(() => {
    profileEl = document.querySelector('#profile');
    setTimeout(() => setIsReady(true), 1000);
  }, []);

  React.useEffect(() => {
    props.setBlockVisibility(props.index, wpState);
  }, [wpState]);

  const classes = Classnames({
    'block': true,
    'is-active': props.active, 
    'is-inactive': !props.active, 
    'is-ready': isReady
  }, wpState);

  return (
    <Waypoint topOffset={1} bottomOffset={1} 
      onPositionChange={event => setWpState(event.currentPosition)}>
      <section id="profile" className={classes}>
        <h3>Profil</h3>
        <article>
          Hello!
        </article>
        <div className="overlay">
          <span /><span />
        </div>
      </section>
    </Waypoint>
  );
}

export default Profile;