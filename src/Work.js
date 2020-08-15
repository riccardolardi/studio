import React from 'react';
import Classnames from 'classnames';
import LazyImage from './LazyImage.js';
import './Work.scss';

const imgs = [
  require('./img/gmz/gmz1.png'),
  require('./img/stephanwalter/stephanwalter1.png'),
  require('./img/ioc/ioc1.png'),
  require('./img/mplus/mplus1.png'),
  require('./img/hyundai/iart-hyundai3.jpg'),
  require('./img/boston/iart-boston1.jpg'),
  require('./img/armory/iart-armory1.jpg'),
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
      <article className="with-image image-right">
        <a href="/work/sommernachts-ball" onClick={onProjectClicked.bind(this, 0)}>
          <div className="text">
            <span className="char divider divider-right">
              <span />
            </span>
            <h4 className="bold margin-bottom">Sommernachts-Ball</h4>
            <p>Website, 2020</p>
            <p>Genossenschaftsbund Migros Zürich</p>
          </div>
          <div className="image">
            <LazyImage width={1024} height={956} src={imgs[0]} alt="Sommernachts-Ball" />
          </div>
        </a>
      </article>
      <article className="with-image image-left">
        <a href="/work/stephanwalter"onClick={onProjectClicked.bind(this, 1)}>
          <div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
            <h4 className="bold margin-bottom">Stephan Walter</h4>
            <p>Website, 2020</p>
            <p>Stephan Walter, Grafiker, Zürich</p>
          </div>
          <div className="image">
            <LazyImage width={1024} height={956} src={imgs[1]} alt="Stephan Walter" />
          </div>
        </a>
      </article>
      <article className="with-image image-right">
        <a href="/work/ioc" onClick={onProjectClicked.bind(this, 2)}>
          <div className="text">
            <span className="char divider divider-right">
              <span />
            </span>
            <h4 className="bold margin-bottom">IOC MapTool</h4>
            <p>App für Video-Bespielung, 2019</p>
            <p>Int. Olympic Commitee, Lausanne</p>
          </div>
          <div className="image">
            <LazyImage width={1024} height={1010} src={imgs[2]} alt="IOC MapTool" />
          </div>
        </a>
      </article>
      <article className="with-image image-left">
        <a href="/work/mplus" onClick={onProjectClicked.bind(this, 3)}>
          <div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
            <h4 className="bold margin-bottom">Simulation M+ Museum</h4>
            <p>3D-Simulation für bespielbares Fassadensystem, 2019</p>
            <p>M+ Museum, Hong Kong</p>
          </div>
          <div className="image">
            <LazyImage width={1024} height={1010} src={imgs[3]} alt="Simulation M+ Museum" />
          </div>
        </a>
      </article>
      <article className="with-image image-right">
        <a href="/work/hyundai" onClick={onProjectClicked.bind(this, 4)}>
          <div className="text">
            <span className="char divider divider-right">
              <span />
            </span>
            <h4 className="bold margin-bottom">Hyundai Olympic Pavilion</h4>
            <p>Interaktive Wasserinstallation, 2018</p>
            <p>Hyundai, Südkorea</p>
          </div>
          <div className="image">
            <LazyImage width={1200} height={675} src={imgs[4]} alt="Hyundai Olympic Pavilion" />
          </div>
        </a>
      </article>
      <article className="with-image image-left">
        <a href="/work/boston" onClick={onProjectClicked.bind(this, 5)}>
          <div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
            <h4 className="bold margin-bottom">Harvard Square Theatre Facade</h4>
            <p>Mockup für bespielbare Fassade, 2018</p>
            <p>Kirche LLC, Boston, MA</p>
          </div>
          <div className="image">
            <LazyImage width={1200} height={675} src={imgs[5]} alt="Harvard Square Theatre Facade" />
          </div>
        </a>
      </article>
      <article className="with-image image-right">
        <a href="/work/hanselgretel" onClick={onProjectClicked.bind(this, 6)}>
          <div className="text">
            <span className="char divider divider-right">
              <span />
            </span>
            <h4 className="bold margin-bottom">Hansel & Gretel</h4>
            <p>Immersive Videoinstallation, 2017</p>
            <p>Armory Park Avenue, NY</p>
          </div>
          <div className="image">
            <LazyImage width={1200} height={675} src={imgs[6]} alt="Hansel & Gretel" />
          </div>
        </a>
      </article>
      <article className="with-image image-left">
        <a href="/work/maersk" onClick={onProjectClicked.bind(this, 7)}>
          <div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
            <h4 className="bold margin-bottom">Maersk Visitor Centre</h4>
            <p>Interaktiver Medientisch, 2017</p>
            <p>Maersk, Copenhagen</p>
          </div>
          <div className="image">
            <LazyImage width={1980} height={1320} src={imgs[7]} alt="Maersk Visitor Centre" />
          </div>
        </a>
      </article>
    </section>
  );
}

export default Work;