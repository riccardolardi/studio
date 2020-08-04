import React from 'react';
import Classnames from 'classnames';
import './Contact.scss';

const imgs = [

];

function Contact(props) {
  const { index, active: isActive, intersecting: isIntersecting } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting
  });

  return (
    <section id="contact" className={classes} data-index={index}>
      <h3>Kontakt</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-top divider-right">
            <span />
          </span>
          <h4>Studio Riccardo Lardi</h4>
          <p>General Guisan-Strasse 78<br/>4054 Basel<br/>Schweiz</p>
          <p><a href="tel:0041793396538">0041 79 339 65 38</a></p>
          <p><a href="mailto:hello@riccardolardi.com">hello@riccardolardi.com</a></p>
        </div>
        <div className="image">
          <img src={imgs[0]} alt="" />
        </div>
      </article>
    </section>
  );
}

export default Contact;