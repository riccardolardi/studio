import React from 'react';
import Classnames from 'classnames';
import './Profile.scss';

function Profile(props) {
  const { index, active: isActive } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive
  });

  return (
    <section id="profile" className={classes} data-index={index}>
      <h3>Profil</h3>
      <article>
        Hello!
      </article>
    </section>
  );
}

export default Profile;