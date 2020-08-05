import React from 'react';
import Classnames from 'classnames';
import './Contact.scss';

function Contact(props) {
  const { index, active: isActive, intersecting: isIntersecting } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting
  });

  return (
    <section id="contact" className={classes} data-index={index}>
      <h3 className="bold">Kontakt</h3>
      <article className="with-image image-right">
        <div className="text">
          <span className="char divider divider-top divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">Studio Riccardo Lardi</h4>
          <p>General Guisan-Strasse 78<br/>4054 Basel<br/>Schweiz</p>
          <p><a href="tel:0041793396538">0041 79 339 65 38</a></p>
          <p><a href="mailto:hello@riccardolardi.com">hello@riccardolardi.com</a></p>
        </div>
        <div className="image align-left">
          <span role="img" aria-label="contact" className="assembly">p</span>
        </div>
      </article>
    </section>
  );
}

export default Contact;