import React from 'react';
import Classnames from 'classnames';
import tweens from 'tween-functions';
import { Waypoint } from 'react-waypoint';
import './News.scss';

let newsEl;

function News(props) {
  const [wpState, setWpState] = React.useState(null);
  const [isReady, setIsReady] = React.useState(null);

  React.useLayoutEffect(() => {
    newsEl = document.querySelector('#news');
    setTimeout(() => setIsReady(true), 1000);
  }, []);

  React.useEffect(() => {
    props.setBlockVisibility(props.index, wpState);
  }, [wpState]);

  React.useEffect(() => {
    const newsElScrollPercent = (1 - ((newsEl.offsetTop + newsEl.offsetHeight) - 
      (props.scrollY + window.innerHeight)) / newsEl.offsetHeight);
    const newTransform = `translateY(-${newsElScrollPercent * 100}px)`;
    const newOpacity = tweens.easeInOutQuad(newsElScrollPercent, 1, 0, 1);
    document.querySelector('#news h3').style.transform = newTransform;
    document.querySelector('#news h3').style.opacity = newOpacity;
  }, [props.scrollY]);

  const classes = Classnames({
    'block': true,
    'is-ready': isReady
  }, wpState);

  return (
    <Waypoint topOffset={1} bottomOffset={1} 
      onPositionChange={event => setWpState(event.currentPosition)}>
      <section id="news" className={classes}>
        <h3><span className="inner">News</span></h3>
        <article className="with-image image-right">
          <div className="text">
            <span className="char divider divider-top divider-left">
              <span />
            </span>
            <h4>Samses aper nullat dit</h4>
            <span className="date">12.03.2020</span>
            <p>Adipisicing jerky pork chop kevin, esse kielbasa spare ribs ball tip pig dolore duis. Spare ribs consequat consectetur eu voluptate mollit et ullamco pork belly exercitation ut.</p>
          </div>
          <div className="image">
            <img src="https://images.gebaeudehuelle.net/gyBJtsDMpPEcXKBWOZQ8ZwFSFbs=/1580x1054/https%3A%2F%2Foldimages.gebaeudehuelle.net%2Fdie-fassade%2Fbilder%2Fbilder2018%2Frundzwei-architekten-gui-rebelo_korkenzieherhaus-berlin-1.jpg" alt="" />
          </div>
        </article>
        <article className="with-image image-right">
          <div className="text">
            <span className="char divider divider-top divider-left">
              <span />
            </span>
            <h4>Parabet nullat ditet</h4>
            <span className="date">12.03.2020</span>
            <p>Brisket sunt shank burgdoggen drumstick. Ipsum in tongue nisi. Cupidatat magna minim eiusmod kevin. Swine cillum filet mignon, eiusmod minim et ball tip ut elit chicken in voluptate. Ham hock brisket tail, cow aliqua minim bresaola et veniam meatball t-bone sed proident.</p>
          </div>
          <div className="image">
            <img src="https://www.ingenieur.de/wp-content/uploads/2019/08/1559120396-9475-1-e1566828476667.jpg" alt="" />
          </div>
        </article>
        <article className="with-image image-right">
          <div className="text">
            <span className="char divider divider-top divider-left">
              <span />
            </span>
            <h4>Mensut memem debet dare, gusto</h4>
            <span className="date">12.03.2020</span>
            <p>Bacon ipsum dolor amet ham hock non ground round andouille dolore meatloaf.</p><p>Ut esse picanha turducken aliqua filet mignon tenderloin. Kielbasa nulla pork landjaeger pig. Turducken tempor jowl tail shank dolore.</p>
          </div>
          <div className="image">
            <img src="https://www.baudokumentation.ch/farbe-fuer-hinterlueftete-fassaden-125587/news-files/Fassade-Color.jpg" alt="" />
          </div>
        </article>
        <div className="overlay">
          <span /><span />
        </div>
      </section>
    </Waypoint>
  );
}

export default News;