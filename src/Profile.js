import React from 'react';
import Classnames from 'classnames';
import LazyImage from './LazyImage.js';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {ReactComponent as Icon} from './img/icons/wave-round.svg';
import './Profile.scss';

const imgs = [
  require('./img/riccardolardi/riccardolardi6.jpg')
];

function Profile(props) {
  const { 
    index, 
    active: isActive, 
    intersecting: isIntersecting, 
    prevIsIntro, 
    moveToBlock, 
    activeLang, 
    strings 
  } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting, 
    'prev-is-intro': prevIsIntro 
  });

  return (
    <section id="profile" className={classes} data-index={index}>
      <h3 className="bold">{strings.profile.Title[activeLang]}</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <p>{strings.profile.Slogan[activeLang]}</p>
          <h4 className="bold">{strings.profile.Services[activeLang]}</h4>
          <ul>
            <li>{strings.profile.Service1[activeLang]}</li>
            <li>{strings.profile.Service2[activeLang]}</li>
            <li>{strings.profile.Service3[activeLang]}</li>
            <li>{strings.profile.Service4[activeLang]}</li>
            <li>{strings.profile.Service5[activeLang]}</li>
            <li>{strings.profile.Service6[activeLang]}</li>
          </ul>
        </div>
        <div className="image">
          <Icon className="icon" />
          <LazyImage width={684} height={1024} src={imgs[0]} alt="Riccardo Lardi" />
        </div>
      </article>
      <article className="text-center">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <p dangerouslySetInnerHTML={{__html: strings.profile.Info1[activeLang]}} />
          <p dangerouslySetInnerHTML={{__html: strings.profile.Info2[activeLang]}} />
          <p dangerouslySetInnerHTML={{__html: strings.profile.Info3[activeLang]}} />
          <p dangerouslySetInnerHTML={{__html: strings.profile.Info4[activeLang]}} />
          <div className="contact-us">
            <span className="contact-us-button" onClick={() => moveToBlock(3)}>
              <ArrowForwardIcon fontSize="large" />Get in touch!
            </span>
            <span className="illustration" role="img" aria-label="Get in touch">×</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Profile;