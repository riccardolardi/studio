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
    data 
  } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting, 
    'prev-is-intro': prevIsIntro 
  });

  return (
    <section id="profile" className={classes} data-index={index}>
      <h3 className="bold">{data.profile.Title[activeLang]}</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <p>{data.profile.Slogan[activeLang]}</p>
          <h4 className="bold">{data.profile.Services[activeLang]}</h4>
          <ul>
            <li>{data.profile.Service1[activeLang]}</li>
            <li>{data.profile.Service2[activeLang]}</li>
            <li>{data.profile.Service3[activeLang]}</li>
            <li>{data.profile.Service4[activeLang]}</li>
            <li>{data.profile.Service5[activeLang]}</li>
            <li>{data.profile.Service6[activeLang]}</li>
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
          <p dangerouslySetInnerHTML={{__html: data.profile.Info1[activeLang]}} />
          <p dangerouslySetInnerHTML={{__html: data.profile.Info2[activeLang]}} />
          <p dangerouslySetInnerHTML={{__html: data.profile.Info3[activeLang]}} />
          <p dangerouslySetInnerHTML={{__html: data.profile.Info4[activeLang]}} />
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