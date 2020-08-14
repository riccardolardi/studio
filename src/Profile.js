import React from 'react';
import Classnames from 'classnames';
import LazyImage from './LazyImage.js';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {ReactComponent as Icon} from './img/icons/wave-round.svg';
import './Profile.scss';

const imgs = [
  require('./img/riccardolardi.jpg')
];

function Profile(props) {
  const { 
    index, 
    active: isActive, 
    intersecting: isIntersecting, 
    prevIsIntro, 
    moveToBlock 
  } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting, 
    'prev-is-intro': prevIsIntro 
  });

  return (
    <section id="profile" className={classes} data-index={index}>
      <h3 className="bold">Profil</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <p>Das Studio aus Basel spezialisiert sich auf die Planung, Konzeption, Design und Entwicklung von Projekten zwischen digitalem und physischem Raum.</p>
          <h4 className="bold">Dienstleistungen</h4>
          <ul>
            <li>Produktdesign und Konzept</li>
            <li>UX/UI, Interaction Design</li>
            <li>Entwickeln von Apps und Websites</li>
            <li>Prototyping & Testing</li>
            <li>Beratung, Schulung</li>
            <li>Agile & iterative Prozesse</li>
          </ul>
        </div>
        <div className="image">
          <Icon className="icon" />
          <LazyImage width={683} height={1024} src={imgs[0]} alt="Studio Riccardo Lardi" />
        </div>
      </article>
      <article className="text-center">
        <div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
          <p>Riccardo Lardi ist dipl. Interaction Designer mit BA ZHdK Zürich und MA Royal College of Art, London und hat langjährige Berufserfahrung in Anstellungen bei Firmen wie <a className="link" rel="noopener noreferrer" target="_blank" href="http://www.takram.com">Takram</a> (London) und <a className="link" rel="noopener noreferrer" target="_blank" href="http://www.iart.ch">iart</a> (Basel) sammeln können.</p>
          <p>Mit über 10 Jahren Erfahrung im Bereich digitaler Medien im physischen & virtuellen Raum bietet das Studio sämtliche Services zur erfolgreichen Umsetzung Ihrer Produktidee.</p>
          <p>Gemeinsam mit dem Kunden begleitet und verwirklicht das Studio Projekte, von der rohen Idee über deren Verfestigung, über den ersten Prototypen bis hin zum fertigen Produkt und dessen Inbetriebnahme. Der Kunde wird partizipativ am Designprozess miteinbezogen und ist Projektpartner auf Augenhöhe.</p>
          <p>Das Studio bewegt sich in einem dichten Netzwerk von lokal verfügbaren Spezialisten in relevanten Bereichen (Fotografie & Video, Grafik, Elektronik, Fabrikation) und greift wo nötig auf diese zu.</p>
          <div className="contact-us">
            <span className="contact-us-button" onClick={() => moveToBlock(3)}>
              <ArrowForwardIcon fontSize="large" />Haben Sie eine Anfrage?
            </span>
            <span className="illustration" role="img" aria-label="Kontaktaufnahme">×</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Profile;