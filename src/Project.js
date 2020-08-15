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
        <section>
  				<div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
          	<p>Redesign und Neuentwicklung von Front- und Backend für die Migros Sommernachts-Ball Webseite.</p>
            <ul>
  	          <li className="tag date"><CalendarTodayIcon fontSize={'small'} />2020</li>
  	          <li className="tag client-tags"><HomeWorkIcon fontSize={'small'} />Migros Kulturprozent</li>
  	          <li className="tag partner-tags"><PeopleIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" href="http://www.komun.ch">Komun</a>,&nbsp;
                <a className="link" rel="noopener noreferrer" target="_blank" href="http://www.stephanwalter.ch">Stephan Walter</a>
              </li>
  	          <li className="tag service-tags"><CategoryIcon fontSize={'small'} />Interaction Design, Beratung, Programmierung</li>
  	          <li className="tag tech-tags"><BuildIcon fontSize={'small'} />React, Gatsby, GraphQL</li>
              <li className="tag product-link"><LinkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" 
                  href="http://2020-gatsby.sommernachts-ball.ch">http://www.sommernachts-ball.ch
                </a>
              </li>
            </ul>
            <p>Bacon ipsum dolor amet pork belly turkey porchetta shoulder, chuck salami cupim pork loin short ribs sirloin spare ribs turducken. Cupim tongue chislic salami pastrami pork belly pancetta swine bresaola cow. Tri-tip hamburger ham, cow doner sausage filet mignon pork flank. Pork kielbasa jerky landjaeger brisket frankfurter.</p>
          </div>
          <div className="images">
            <LazyImage width={1024} height={956} src={require('./img/gmz/gmz1.png')} alt="Sommernachts-Ball Macbook" />
            <LazyImage width={827} height={1024} src={require('./img/gmz/gmz2.png')} alt="Sommernachts-Ball iPhone" />
            <LazyImage width={842} height={1024} src={require('./img/gmz/gmz3.png')} alt="Sommernachts-Ball iPad" />
          </div>
        </section>
      </article>}
	    {openProjectId === 1 && <article>
      	<h4 className="bold">Stephan Walter</h4>
        <section>
  				<div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
          	<p>Redesign und Neuentwicklung von Front- und Backend für die Webseite vom Zürcher Grafiker und Typografen Stephan Walter.</p>
            <ul>
  	          <li className="tag date"><CalendarTodayIcon fontSize={'small'} />2019</li>
  	          <li className="tag client-tags"><HomeWorkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" href="http://www.stephanwalter.ch">Stephan Walter</a>
              </li>
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
            <LazyImage width={1024} height={956} src={require('./img/stephanwalter/stephanwalter1.png')} alt="Sommernachts-Ball iPad" />
            <LazyImage width={842} height={1024} src={require('./img/stephanwalter/stephanwalter2.png')} alt="Sommernachts-Ball iPad" />
            <LazyImage width={708} height={1024} src={require('./img/stephanwalter/stephanwalter3.png')} alt="Sommernachts-Ball iPad" />
          </div>
        </section>
      </article>}
      {openProjectId === 2 && <article>
        <h4 className="bold">IOC MapTool</h4>
        <section>
          <div className="text">
            <span className="char divider divider-left" />
            <p>Desktop Applikation (Win/Mac/Linux) zur Bewirtschaftung und Verwaltung des Datenpools für eine Video-Bespielung im Neubau vom IOC in Lausanne.</p>
            <ul>
              <li className="tag date"><CalendarTodayIcon fontSize={'small'} />2019</li>
              <li className="tag client-tags"><HomeWorkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" href="http://www.iart.ch">iart</a>,&nbsp;
                <a className="link" rel="noopener noreferrer" target="_blank" href="http://www.studiobanana.com">Studio Banana</a>
              </li>
              <li className="tag service-tags"><CategoryIcon fontSize={'small'} />Design, Programmierung</li>
              <li className="tag tech-tags"><BuildIcon fontSize={'small'} />React, Electron, Material UI</li>
              <li className="tag product-link"><LinkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" 
                  href="http://www.iart.ch/work/ioc-agora">http://www.iart.ch/work/ioc-agora
                </a>
              </li>
            </ul>
            <p>Für den Unterhalt der "Universality" Video-Bespielung im neugestalteten Foyer "Agora" des International Olympic Committees in Lausanne wurde die massgeschneiderte Software konzipiert und entwickelt.</p>
            <p>Der Kunde kann durch das Tool die Inhalte der Bespielung leicht und intuitiv ändern und erweitern.</p>
          </div>
          <div className="images">
            <LazyImage width={1024} height={1010} src={require('./img/ioc/ioc1.png')} alt="IOC MapTool" />
            <LazyImage width={1024} height={1010} src={require('./img/ioc/ioc2.png')} alt="IOC MapTool" />
          </div>
        </section>
        <section className="image-left">
          <div className="text">
            <p>"Der neue Hauptsitz des Internationalen Olympischen Komitees in Lausanne: [...] Auf drei riesigen, in die Wände eingelassenen, ebenfalls gebogenen OLED-Screens erwarten sie massgeschneiderte Inhalte. Denn je nachdem, welche Delegation vor Ort ist, können sie live aufbereitet werden."</p>
            <span className="text-source">Quelle: <a className="link" rel="noopener noreferrer" target="_blank" href="https://iart.ch/work/ioc-agora">iart IOC Agora</a></span>
          </div>
          <div className="images">  
            <LazyImage width={1200} height={675} src={require('./img/ioc/ioc3.jpg')} alt="Rubén P. Bescos via studio banana" label="Rubén P. Bescos via Studio Banana" />
          </div>
        </section>
      </article>}
    </section>
  );
}

export default Project;