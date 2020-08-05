import React from 'react';
import Classnames from 'classnames';
import LazyImage from './LazyImage.js';
import './Work.scss';

const imgs = [
  require('./img/gmz/gmz3.png'),
  require('./img/mplus/iart-mplus1.png'),
  require('./img/hyundai/iart-hyundai3.jpg'),
  require('./img/armory/iart-armory1.jpg'),
  require('./img/boston/iart-boston1.jpg'),
  require('./img/maersk/kimwendt-maersk1.jpg')
];

function Work(props) {
  const { index, active: isActive, intersecting: isIntersecting } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting
  });

  return (
    <section id="work" className={classes} data-index={index}>
      <h3 className="bold">Projekte</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-top divider-right">
            <span />
          </span>
          <h4 className="bold margin-bottom">Sommernachts-Ball</h4>
          <p>Website, 2020</p>
          <p>Genossenschaftsbund Migros Zürich</p>
        </div>
        <div className="image align-left">
          <LazyImage src={imgs[0]} alt="" width="537" height="834" />
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-top divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">Simulation M+ Museum</h4>
          <p>3D-Simulation für bespielbare Fassade, 2019</p>
          <p>M+ Museum, Hong Kong</p>
        </div>
        <div className="image">
          <LazyImage src={imgs[1]} alt="" width="1148" height="636" />
        </div>
      </article>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-top divider-right">
            <span />
          </span>
          <h4 className="bold margin-bottom">Hyundai Pavilion Olympia 2018</h4>
          <p>Interaktive Wasserinstallation, 2018</p>
          <p>Hyundai, Pyeongchang, Südkorea</p>
        </div>
        <div className="image">
          <LazyImage src={imgs[2]} alt="" width="1200" height="675" />
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-top divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">Hansel & Gretel</h4>
          <p>Immersive Videoinstallation, 2017</p>
          <p>Armory Park Avenue, New York</p>
        </div>
        <div className="image">
          <LazyImage src={imgs[3]} alt="" width="1200" height="675" />
        </div>
      </article>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-top divider-right">
            <span />
          </span>
          <h4 className="bold margin-bottom">Harvard Street Square Facade</h4>
          <p>Mockup für bespielbare Fassade, 2018</p>
          <p>Boston, Cambridge</p>
        </div>
        <div className="image">
          <LazyImage src={imgs[4]} alt="" width="1200" height="675" />
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-top divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">Maersk Visitor Centre</h4>
          <p>Interaktiver Medientisch, 2017</p>
          <p>Maersk, Copenhagen</p>
        </div>
        <div className="image">
          <LazyImage src={imgs[5]} alt="" width="1980" height="1320" />
        </div>
      </article>
      <div className="assembly-wrap">
        <span role="img" aria-label="work" className="assembly">&#37;</span>
      </div>
    </section>
  );
}

export default Work;