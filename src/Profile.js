import React from 'react';
import Classnames from 'classnames';
import './Profile.scss';

const imgs = [
  require('./img/riccardolardi.jpg')
];

function Profile(props) {
  const { index, active: isActive } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive
  });

  return (
    <section id="profile" className={classes} data-index={index}>
      <h3>Profil</h3>
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
      <article className="text-center">
        <div className="text">
          <span className="char divider divider-top divider-left">
            <span />
          </span>
          <p>Mit über 10 Jahren Erfahrung im Bereich digitaler Medien und deren Einbettung im physischen Raum bietet das Studio sämtliche Services zur erfolgreichen Umsetzung Ihrer Produktidee.</p>
          <p>Von der rohen Idee über deren Verfestigung und den ersten Prototypen bis hin zum fertigen Produkt und dessen Inbetriebnahme begleitet das Studio den Kunden und inkludiert diesen partizipativ am Designprozess.</p>
          <p>Das Studio bewegt sich in einem dichten Netzwerk von Spezialisten in relevanten Bereichen und greift wo nötig auf diese zu.</p>
        </div>
      </article>
    </section>
  );
}

export default Profile;