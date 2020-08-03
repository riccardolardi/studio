import React from 'react';
import Classnames from 'classnames';
import './Work.scss';

const imgs = [
  require('./img/riccardolardi.jpg')
];

function Work(props) {
  const { index, active: isActive } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive
  });

  return (
    <section id="work" className={classes} data-index={index}>
      <h3>Projekte</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-top divider-left">
            <span />
          </span>
          <p>Das Studio spezialisiert sich auf die Planung, Konzeption, Gestaltung und Umsetzung von Projekten zwischen digitalem und physischem Raum.</p>
          <h4>Dienstleistungen</h4>
          <ul>
            <li>Produktdesign und Konzept</li>
            <li>UX/UI, Interaction Design</li>
            <li>Entwickeln von Apps und Websites</li>
            <li>Prototyping & Testing</li>
            <li>Agile/iterative Prozesse</li>
          </ul>
        </div>
        <div className="image">
          <img src={imgs[0]} alt="" />
        </div>
      </article>
    </section>
  );
}

export default Work;