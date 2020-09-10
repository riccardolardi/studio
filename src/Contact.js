import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import ReorderIcon from '@material-ui/icons/Reorder';
import Classnames from 'classnames';
import './Contact.scss';

function Contact(props) {
  const { 
    index, 
    active: isActive, 
    intersecting: isIntersecting, 
    activeLang, 
    data 
  } = props;

  const classes = Classnames({
    'block': true,
    'is-active': isActive,
    'is-intersecting': isIntersecting
  });

  return (
    <section id="contact" className={classes} data-index={index}>
      <h3 className="bold">{data.contact.Title[activeLang]}</h3>
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
            target="_blank" aria-label="LinkedIn" className="social-icon" alt="LinkedIn">
            <LinkedInIcon fontSize={'large'} />
          </a>
          <a href="https://twitter.com/riccardolardi" rel="noopener noreferrer" 
            target="_blank" aria-label="Twitter" className="social-icon" alt="Twitter">
            <TwitterIcon fontSize={'large'} />
          </a>
          <a href="https://github.com/riccardolardi" rel="noopener noreferrer" 
            target="_blank" aria-label="GitHub" className="social-icon" alt="GitHub">
            <GitHubIcon fontSize={'large'} />
          </a>
          <a href="https://stackoverflow.com/users/1515187/riccardolardi" rel="noopener noreferrer" 
            target="_blank" aria-label="StackOverflow" className="social-icon" alt="StackOverflow">
            <ReorderIcon fontSize={'large'} />
          </a>
        </div>
        <div className="image">
          <div className="logo">
            <span className={`logo-symbol box`}>
              <svg height="256" width="256" viewBox="0 0 256 256">
                <rect width="256" height="256" />
              </svg>
            </span>
            <span className={`logo-symbol triangle`}>
              <svg height="256" width="256" viewBox="0 0 256 256">
                <polygon points="128,0 0,256 256,256" />
              </svg>
            </span>
            <span className={`logo-symbol circle`}>
              <svg height="256" width="256" viewBox="0 0 256 256">
                <circle cx="128" cy="128" r="128" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Contact;