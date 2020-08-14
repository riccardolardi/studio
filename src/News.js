import React from 'react';
import Classnames from 'classnames';
import LazyImage from './LazyImage.js';
import LazyLoad from 'react-lazyload';
import './News.scss';

const imgs = [
  require('./img/gmz/gmz1.png')
]

function News(props) {
  const {
    index,
    active: isActive,
    intersecting: isIntersecting, 
    prevIsIntro
  } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting, 
    'prev-is-intro': prevIsIntro
  });

  return (
    <section id="news" className={classes} data-index={index}>
      <h3 className="bold">News</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold">Samses aper nullat dit</h4>
          <span className="date margin-bottom">12.03.2020</span>
          <p>Adipisicing jerky pork chop kevin, esse kielbasa spare ribs ball tip pig dolore duis. Spare ribs consequat consectetur eu voluptate mollit et ullamco pork belly exercitation ut.</p>
        </div>
        <div className="image">
          <LazyLoad width={1024} height={956}><LazyImage src={imgs[0]} alt="News Item" /></LazyLoad>
        </div>
      </article>
      <article className="with-image image-left">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold">Parabet nullat ditet</h4>
          <span className="date margin-bottom">12.03.2020</span>
          <p>Brisket sunt shank burgdoggen drumstick. Ipsum in tongue nisi. Cupidatat magna minim eiusmod kevin. Swine cillum filet mignon, eiusmod minim et ball tip ut elit chicken in voluptate. Ham hock brisket tail, cow aliqua minim bresaola et veniam meatball t-bone sed proident.</p>
        </div>
        <div className="image">
          <LazyLoad width={1024} height={956}><LazyImage src={imgs[0]} alt="News Item" /></LazyLoad>
        </div>
      </article>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold">Mensut memem debet dare, gusto</h4>
          <span className="date margin-bottom">12.03.2020</span>
          <p>Bacon ipsum dolor amet ham hock non ground round andouille dolore meatloaf.</p><p>Ut esse picanha turducken aliqua filet mignon tenderloin. Kielbasa nulla pork landjaeger pig. Turducken tempor jowl tail shank dolore.</p>
        </div>
        <div className="image">
          <LazyLoad width={1024} height={956}><LazyImage src={imgs[0]} alt="News Item" /></LazyLoad>
        </div>
      </article>
    </section>
  );
}

export default News;