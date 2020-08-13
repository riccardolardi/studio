import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ReorderIcon from '@material-ui/icons/Reorder';
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
          <span className="char divider divider-left">
            <span />
          </span>
          <h4 className="bold margin-bottom">Studio Riccardo Lardi</h4>
          <p>General Guisan-Strasse 78<br/>4054 Basel<br/>Schweiz</p>
          <p><a href="tel:0041793396538">0041 79 339 65 38</a></p>
          <p><a href="mailto:hello@riccardolardi.com">hello@riccardolardi.com</a></p>
          <a href="https://www.linkedin.com/in/riccardolardi" rel="noopener noreferrer" 
            target="_blank" className="social-icon" alt="LinkedIn">
            <LinkedInIcon fontSize={'large'} />
          </a>
          <a href="https://github.com/riccardolardi" rel="noopener noreferrer" 
            target="_blank" className="social-icon" alt="GitHub">
            <GitHubIcon fontSize={'large'} />
          </a>
          <a href="https://stackoverflow.com/users/1515187/riccardolardi" rel="noopener noreferrer" 
            target="_blank" className="social-icon" alt="StackOverflow">
            <ReorderIcon fontSize={'large'} />
          </a>
        </div>
        <div className="image align-left" />
      </article>
    </section>
  );
}

export default Contact;