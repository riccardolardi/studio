import React from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import BuildIcon from '@material-ui/icons/Build';
import LinkIcon from '@material-ui/icons/Link';
import LazyImage from './LazyImage.js';
import Classnames from 'classnames';
import './Project.scss';

function Project(props) {
	const [isReady, setIsReady] = React.useState(null);
	const {
		openProjectId 
	} = props;

	React.useLayoutEffect(() => {
		setIsReady(true);
	}, []);

  const classes = Classnames({
  	'project': true,
  	'is-ready': isReady, 
  }, `project-${openProjectId}`);

  return (
    <section id="project" className={classes}>
	    {openProjectId === 0 && <article>
      	<h4 className="bold">Sommernachts-Ball</h4>
				<div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
        	<p>Redesign und Neuentwicklung von Front- und Backend für die Migros Sommernachts-Ball Webseite.</p>
          <ul>
	          <li className="tag date"><CalendarTodayIcon fontSize={'small'} />2020</li>
	          <li className="tag client-tags"><HomeWorkIcon fontSize={'small'} />Migros Kulturprozent</li>
	          <li className="tag partner-tags"><PeopleIcon fontSize={'small'} /><a className="link" href="http://www.komun.ch">Komun</a>,&nbsp;<a className="link"  href="http://www.stephanwalter.ch">Stephan Walter</a></li>
	          <li className="tag service-tags"><CategoryIcon fontSize={'small'} />Interaction Design, Beratung, Programmierung</li>
	          <li className="tag tech-tags"><BuildIcon fontSize={'small'} />React, Gatsby, GraphQL</li>
            <li className="tag product-link"><LinkIcon fontSize={'small'} />
              <a className="link" rel="noopener noreferrer" target="_blank" 
                href="http://2020-gatsby.sommernachts-ball.ch">http://2020-gatsby.sommernachts-ball.ch
              </a>
            </li>
          </ul>
          <p>Bacon ipsum dolor amet pork belly turkey porchetta shoulder, chuck salami cupim pork loin short ribs sirloin spare ribs turducken. Cupim tongue chislic salami pastrami pork belly pancetta swine bresaola cow. Tri-tip hamburger ham, cow doner sausage filet mignon pork flank. Pork kielbasa jerky landjaeger brisket frankfurter.</p>
        </div>
        <div className="images">
          <LazyImage src={require('./img/gmz/gmz1.png')} width="1024" height="956" alt="Sommernachts-Ball Macbook" visibleByDefault />
          <LazyImage src={require('./img/gmz/gmz2.png')} width="827" height="1024" alt="Sommernachts-Ball iPhone" visibleByDefault />
          <LazyImage src={require('./img/gmz/gmz3.png')} width="842" height="1024" alt="Sommernachts-Ball iPad" visibleByDefault />
        </div>
      </article>}
	    {openProjectId === 1 && <article>
      	<h4 className="bold">Stephan Walter</h4>
				<div className="text">
          <span className="char divider divider-left">
            <span />
          </span>
        	<p>Redesign und Neuentwicklung von Front- und Backend für die Webseite vom Zürcher Grafiker und Typografen Stephan Walter.</p>
          <ul>
	          <li className="tag date"><CalendarTodayIcon fontSize={'small'} />2019</li>
	          <li className="tag client-tags"><HomeWorkIcon fontSize={'small'} />Stephan Walter</li>
	          <li className="tag service-tags"><CategoryIcon fontSize={'small'} />Design, Programmierung</li>
	          <li className="tag tech-tags"><BuildIcon fontSize={'small'} />React, Headless WP</li>
	          <li className="tag product-link"><LinkIcon fontSize={'small'} />
              <a className="link" rel="noopener noreferrer" target="_blank" 
                href="http://dev.stephanwalter.ch">http://dev.stephanwalter.ch
              </a>
            </li>
          </ul>
          <p>Bacon ipsum dolor amet pork belly turkey porchetta shoulder, chuck salami cupim pork loin short ribs sirloin spare ribs turducken. Cupim tongue chislic salami pastrami pork belly pancetta swine bresaola cow. Tri-tip hamburger ham, cow doner sausage filet mignon pork flank. Pork kielbasa jerky landjaeger brisket frankfurter.</p>
        </div>
        <div className="images">
          <LazyImage src={require('./img/stephanwalter/stephanwalter1.png')} width="1024" height="956" alt="Stephan Walter Macbook" />
          <LazyImage src={require('./img/stephanwalter/stephanwalter2.png')} width="842" height="1024" alt="Stephan Walter iPad" />
          <LazyImage src={require('./img/stephanwalter/stephanwalter3.png')} width="708" height="1024" alt="Stephan Walter iPhone" />
        </div>
      </article>}
    </section>
  );
}

export default Project;