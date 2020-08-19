import React from 'react';
import Classnames from 'classnames';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LazyImage from './LazyImage.js';
import './Work.scss';

const imgs = [
  require('./img/gmz/gmz1.png'),
  require('./img/stephanwalter/stephanwalter1.png'),
  require('./img/ioc/ioc1.png'),
  require('./img/mplus/mplus1.png'),
  require('./img/hyundai/hyundai1.jpg'),
  require('./img/boston/boston1.jpg'),
  require('./img/armory/iart-armory1.jpg'),
  require('./img/maersk/kimwendt-maersk1.jpg')
];

let articleEls;

function Work(props) {
  const { 
    index, 
    setOpenProjectId, 
    activeLang, 
    strings, 
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
      <h3 className="bold">{strings.work.Title[activeLang]}</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-right">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[0].Title[activeLang]}</h4>
          <p>{strings.project[0].Subtitle[activeLang]}</p>
          <p>{strings.project[0].Subsubtitle[activeLang]}</p>
          <a href="/work/sommernachts-ball" 
            className="info-button" onClick={onProjectClicked.bind(this, 0)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1024} height={956} src={imgs[0]} alt="Sommernachts-Ball" />
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[1].Title[activeLang]}</h4>
          <p>{strings.project[1].Subtitle[activeLang]}</p>
          <p>{strings.project[1].Subsubtitle[activeLang]}</p>
          <a href="/work/stephanwalter" 
            className="info-button" onClick={onProjectClicked.bind(this, 1)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1024} height={956} src={imgs[1]} alt="Stephan Walter" />
        </div>
      </article>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-right">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[2].Title[activeLang]}</h4>
          <p>{strings.project[2].Subtitle[activeLang]}</p>
          <p>{strings.project[2].Subsubtitle[activeLang]}</p>
          <a href="/work/ioc-maptool" 
            className="info-button" onClick={onProjectClicked.bind(this, 2)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1024} height={1010} src={imgs[2]} alt="IOC MapTool" />
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[3].Title[activeLang]}</h4>
          <p>{strings.project[3].Subtitle[activeLang]}</p>
          <p>{strings.project[3].Subsubtitle[activeLang]}</p>
          <a href="/work/mplus" 
            className="info-button" onClick={onProjectClicked.bind(this, 3)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1024} height={1010} src={imgs[3]} alt="Simulation M+ Museum" />
        </div>
      </article>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-right">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[4].Title[activeLang]}</h4>
          <p>{strings.project[4].Subtitle[activeLang]}</p>
          <p>{strings.project[4].Subsubtitle[activeLang]}</p>
          <a href="/work/hyundai" 
            className="info-button" onClick={onProjectClicked.bind(this, 4)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1200} height={675} src={imgs[4]} alt="Hyundai Olympic Pavilion" />
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[5].Title[activeLang]}</h4>
          <p>{strings.project[5].Subtitle[activeLang]}</p>
          <p>{strings.project[5].Subsubtitle[activeLang]}</p>
          <a href="/work/armory" 
            className="info-button" onClick={onProjectClicked.bind(this, 5)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1200} height={675} src={imgs[5]} alt="Harvard Square Theatre Facade" />
        </div>
      </article>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-right">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[6].Title[activeLang]}</h4>
          <p>{strings.project[6].Subtitle[activeLang]}</p>
          <p>{strings.project[6].Subsubtitle[activeLang]}</p>
          <a href="/work/boston" 
            className="info-button" onClick={onProjectClicked.bind(this, 6)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1200} height={675} src={imgs[6]} alt="Hansel & Gretel" />
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">{strings.project[7].Title[activeLang]}</h4>
          <p>{strings.project[7].Subtitle[activeLang]}</p>
          <p>{strings.project[7].Subsubtitle[activeLang]}</p>
          <a href="/work/maersk" 
            className="info-button" onClick={onProjectClicked.bind(this, 7)}>
            <ArrowForwardIcon fontSize="large" />{strings.work.More[activeLang]}
          </a>
        </div>
        <div className="image">
          <LazyImage width={1980} height={1320} src={imgs[7]} alt="Maersk Visitor Centre" />
        </div>
      </article>
    </section>
  );
}

export default Work;