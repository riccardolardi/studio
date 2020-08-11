import React from 'react';
import Classnames from 'classnames';
import LazyImage from './LazyImage.js';
import {ReactComponent as Icon} from './img/icons/wave-triangle.svg';
import './Work.scss';

const imgs = [
  require('./img/gmz/gmz1.png'),
  require('./img/mplus/mplus1.png'),
  require('./img/hyundai/iart-hyundai3.jpg'),
  require('./img/armory/iart-armory1.jpg'),
  require('./img/boston/iart-boston1.jpg'),
  require('./img/maersk/kimwendt-maersk1.jpg')
];

let articleEls;

function Work(props) {
  const { 
    index, 
    setOpenProjectId, 
    active: isActive, 
    intersecting: isIntersecting 
  } = props;

  React.useLayoutEffect(() => {
    articleEls = Array.from(document.querySelectorAll('#work article'));
  }, []);

  function onProjectClicked(index = 0, event) {
    if (event) event.preventDefault();
    setOpenProjectId(index);
    const title = articleEls[index].querySelector('h4').textContent;
    const slug = articleEls[index].querySelector('a').getAttribute('href').replace('/work/', '');
    window.history.pushState({
      type: 'project',
      index: index,
      slug: slug
    }, title, `/work/${slug}`);
  }

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting
  });

  return (
    <section id="work" className={classes} data-index={index}>
      <h3 className="bold">Projekte</h3>
      <Icon className="section-symbol" />
      <article className="with-image image-right">
        <a href="/work/sommernachts-ball" alt="" onClick={onProjectClicked.bind(this, 0)}>
          <div className="text">
            <span className="char divider divider-top divider-right">
              <span />
            </span>
            <h4 className="bold margin-bottom">Sommernachts-Ball</h4>
            <p>Website, 2020</p>
            <p>Genossenschaftsbund Migros Zürich</p>
          </div>
          <div className="image">
            <LazyImage src={imgs[0]} alt="" width="1024" height="849" />
          </div>
        </a>
      </article>
      <article className="with-image image-left">
        <a href="/work/mplus" alt="" onClick={onProjectClicked.bind(this, 1)}>
          <div className="text">
            <span className="char divider divider-top divider-left">
              <span />
            </span>
            <h4 className="bold margin-bottom">Simulation M+ Museum</h4>
            <p>3D-Simulation für bespielbares Fassadensystem, 2019</p>
            <p>M+ Museum, Hong Kong</p>
          </div>
          <div className="image">
            <LazyImage src={imgs[1]} alt="" width="1024" height="845" />
          </div>
        </a>
      </article>
      <article className="with-image image-right">
        <a href="/work/hyundai" alt="" onClick={onProjectClicked.bind(this, 2)}>
          <div className="text">
            <span className="char divider divider-top divider-right">
              <span />
            </span>
            <h4 className="bold margin-bottom">Hyundai Olympic Pavilion</h4>
            <p>Interaktive Wasserinstallation, 2018</p>
            <p>Hyundai, Pyeongchang, Südkorea</p>
          </div>
          <div className="image">
            <LazyImage src={imgs[2]} alt="" width="1200" height="675" />
          </div>
        </a>
      </article>
      <article className="with-image image-left">
        <a href="/work/hanselgretel" alt="" onClick={onProjectClicked.bind(this, 3)}>
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
        </a>
      </article>
      <article className="with-image image-right">
        <a href="/work/boston" alt="" onClick={onProjectClicked.bind(this, 4)}>
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
        </a>
      </article>
      <article className="with-image image-left">
        <a href="/work/maersk" alt="" onClick={onProjectClicked.bind(this, 5)}>
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
        </a>
      </article>
    </section>
  );
}

export default Work;