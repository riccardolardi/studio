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
    activeLang, 
    strings, 
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
      	<h4 className="bold">{strings.project[0].Title[activeLang]}</h4>
        <section>
  				<div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
          	<p dangerouslySetInnerHTML={{__html: strings.project[0].Description1[activeLang]}} />
            <ul>
  	          <li className="tag date"><CalendarTodayIcon fontSize={'small'} /><span>2020</span></li>
  	          <li className="tag client-tags">
                <HomeWorkIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[0].Client[activeLang]}} />
              </li>
  	          <li className="tag partner-tags">
                <PeopleIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[0].Partner[activeLang]}} />
              </li>
  	          <li className="tag service-tags">
                <CategoryIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[0].Services[activeLang]}} />
              </li>
  	          <li className="tag tech-tags">
                <BuildIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[0].Tech[activeLang]}} />
              </li>
              <li className="tag product-link"><LinkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" 
                  href="http://2020-gatsby.sommernachts-ball.ch">http://www.sommernachts-ball.ch
                </a>
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: strings.project[0].Description2[activeLang]}} />
            <p dangerouslySetInnerHTML={{__html: strings.project[0].Description3[activeLang]}} />
          </div>
          <div className="images">
            <LazyImage width={1024} height={956} src={require('./img/gmz/gmz1.png')} alt="Sommernachts-Ball Macbook" />
            <LazyImage width={827} height={1024} src={require('./img/gmz/gmz2.png')} alt="Sommernachts-Ball iPhone" />
            <LazyImage width={842} height={1024} src={require('./img/gmz/gmz3.png')} alt="Sommernachts-Ball iPad" />
          </div>
        </section>
      </article>}
	    {openProjectId === 1 && <article>
      	<h4 className="bold">{strings.project[1].Title[activeLang]}</h4>
        <section>
  				<div className="text">
            <span className="char divider divider-left">
              <span />
            </span>
          	<p dangerouslySetInnerHTML={{__html: strings.project[1].Description1[activeLang]}} />
            <ul>
  	          <li className="tag date"><CalendarTodayIcon fontSize={'small'} /><span>2020</span></li>
  	          <li className="tag client-tags"><HomeWorkIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[1].Client[activeLang]}} />
              </li>
  	          <li className="tag service-tags">
                <CategoryIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[1].Services[activeLang]}} />
              </li>
  	          <li className="tag tech-tags"><BuildIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[1].Tech[activeLang]}} />
              </li>
  	          <li className="tag product-link"><LinkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" 
                  href="http://dev.stephanwalter.ch">http://dev.stephanwalter.ch
                </a>
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: strings.project[1].Description2[activeLang]}} />
            <p dangerouslySetInnerHTML={{__html: strings.project[1].Description3[activeLang]}} />
          </div>
          <div className="images">
            <LazyImage width={1024} height={956} src={require('./img/stephanwalter/stephanwalter1.png')} alt="Sommernachts-Ball iPad" />
            <LazyImage width={842} height={1024} src={require('./img/stephanwalter/stephanwalter2.png')} alt="Sommernachts-Ball iPad" />
            <LazyImage width={708} height={1024} src={require('./img/stephanwalter/stephanwalter3.png')} alt="Sommernachts-Ball iPad" />
          </div>
        </section>
      </article>}
      {openProjectId === 2 && <article>
        <h4 className="bold">{strings.project[2].Title[activeLang]}</h4>
        <section>
          <div className="text">
            <span className="char divider divider-left" />
            <p dangerouslySetInnerHTML={{__html: strings.project[2].Description1[activeLang]}} />
            <ul>
              <li className="tag date"><CalendarTodayIcon fontSize={'small'} /><span>2019</span></li>
              <li className="tag client-tags">
                <HomeWorkIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[2].Client[activeLang]}} />
              </li>
              <li className="tag service-tags">
                <CategoryIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[2].Services[activeLang]}} />
              </li>
              <li className="tag tech-tags">
                <BuildIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[2].Tech[activeLang]}} />
              </li>
              <li className="tag product-link"><LinkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" 
                  href="http://www.iart.ch/work/ioc-agora">http://www.iart.ch/work/ioc-agora
                </a>
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: strings.project[2].Description2[activeLang]}} />
            <p dangerouslySetInnerHTML={{__html: strings.project[2].Description3[activeLang]}} />
          </div>
          <div className="images">
            <LazyImage width={1024} height={1010} src={require('./img/ioc/ioc1.png')} alt="IOC MapTool" />
            <LazyImage width={1024} height={810} src={require('./img/ioc/ioc2.png')} alt="IOC MapTool" />
          </div>
        </section>
        <section className="image-left">
          <div className="text">
            <p dangerouslySetInnerHTML={{__html: '"' + strings.project[2].Description4[activeLang] + '"'}} />
            <p dangerouslySetInnerHTML={{__html: strings.project[2].Description5[activeLang]}} />
          </div>
          <div className="images">  
            <LazyImage width={1200} height={675} src={require('./img/ioc/ioc3.jpg')} alt="Rubén P. Bescos via studio banana" label="Rubén P. Bescos via Studio Banana" />
          </div>
        </section>
      </article>}
      {openProjectId === 3 && <article>
        <h4 className="bold">{strings.project[3].Title[activeLang]}</h4>
        <section>
          <div className="text">
            <span className="char divider divider-left" />
            <p dangerouslySetInnerHTML={{__html: strings.project[3].Description1[activeLang]}} />
            <ul>
              <li className="tag date"><CalendarTodayIcon fontSize={'small'} /><span>2019</span></li>
              <li className="tag client-tags">
                <HomeWorkIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[3].Client[activeLang]}} />
              </li>
              <li className="tag partner-tags">
                <PeopleIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[3].Partner[activeLang]}} />
              </li>
              <li className="tag service-tags">
                <CategoryIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[3].Services[activeLang]}} />
              </li>
              <li className="tag tech-tags">
                <BuildIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[3].Tech[activeLang]}} />
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: strings.project[3].Description2[activeLang]}} />
          </div>
          <div className="images">
            <LazyImage width={1024} height={1010} src={require('./img/mplus/mplus1.png')} alt="mplus" />
            <LazyImage width={1024} height={810} src={require('./img/mplus/mplus2.png')} alt="mplus" />
          </div>
        </section>
        <section className="image-left">
          <div className="text">
            <p dangerouslySetInnerHTML={{__html: strings.project[3].Description3[activeLang]}} />
          </div>
          <div className="images">  
            <LazyImage width={1024} height={810} src={require('./img/mplus/mplus3.png')} alt="mplus" />
          </div>
        </section>
        <section>
          <div className="text">
            <p dangerouslySetInnerHTML={{__html: strings.project[3].Description4[activeLang]}} />
          </div>
          <div className="images">  
            <LazyImage width={1024} height={810} src={require('./img/mplus/mplus4.png')} alt="mplus" />
          </div>
        </section>
      </article>}
      {openProjectId === 4 && <article>
        <h4 className="bold">{strings.project[4].Title[activeLang]}</h4>
        <section>
          <div className="text">
            <span className="char divider divider-left" />
            <p dangerouslySetInnerHTML={{__html: strings.project[4].Description1[activeLang]}} />
            <ul>
              <li className="tag date"><CalendarTodayIcon fontSize={'small'} /><span>2018</span></li>
              <li className="tag client-tags">
                <HomeWorkIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[4].Client[activeLang]}} />
              </li>
              <li className="tag partner-tags">
                <PeopleIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[4].Partner[activeLang]}} />
              </li>
              <li className="tag service-tags">
                <CategoryIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[4].Services[activeLang]}} />
              </li>
              <li className="tag product-link"><LinkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" 
                  href="http://www.iart.ch/work/hyundai">http://www.iart.ch/work/hyundai
                </a>
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: strings.project[4].Description2[activeLang]}} />
            <p dangerouslySetInnerHTML={{__html: strings.project[4].Description3[activeLang]}} />
          </div>
          <div className="images">
            <LazyImage width={1200} height={675} src={require('./img/hyundai/hyundai1.jpg')} alt="hyundai" label="Via iart AG" />
            <LazyImage width={1200} height={675} src={require('./img/hyundai/hyundai2.jpg')} alt="hyundai" label="Via iart AG" />
          </div>
        </section>
        <section className="image-left">
          <div className="text">
            <p dangerouslySetInnerHTML={{__html: strings.project[4].Description4[activeLang]}} />
          </div>
          <div className="images">  
            <LazyImage width={1200} height={675} src={require('./img/hyundai/hyundai3.jpg')} alt="hyundai" label="Via iart AG" />
          </div>
        </section>
        <section>
          <div className="text">
            <p dangerouslySetInnerHTML={{__html: strings.project[4].Description5[activeLang]}} />
          </div>
          <div className="images">  
            <LazyImage width={1200} height={675} src={require('./img/hyundai/hyundai4.jpg')} alt="hyundai" label="Via iart AG" />
          </div>
        </section>
      </article>}
      {openProjectId === 5 && <article>
        <h4 className="bold">{strings.project[5].Title[activeLang]}</h4>
        <section>
          <div className="text">
            <span className="char divider divider-left" />
            <p dangerouslySetInnerHTML={{__html: strings.project[5].Description1[activeLang]}} />
            <ul>
              <li className="tag date"><CalendarTodayIcon fontSize={'small'} /><span>2018</span></li>
              <li className="tag client-tags">
                <HomeWorkIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[5].Client[activeLang]}} />
              </li>
              <li className="tag partner-tags">
                <PeopleIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[5].Partner[activeLang]}} />
              </li>
              <li className="tag service-tags">
                <CategoryIcon fontSize={'small'} />
                <span dangerouslySetInnerHTML={{__html: strings.project[5].Services[activeLang]}} />
              </li>
              <li className="tag product-link"><LinkIcon fontSize={'small'} />
                <a className="link" rel="noopener noreferrer" target="_blank" 
                  href="https://iart.ch/news/ein-mockup-für-die-led-fassade-in-boston">iart News
                </a>
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: strings.project[5].Description2[activeLang]}} />
            <p dangerouslySetInnerHTML={{__html: strings.project[5].Description3[activeLang]}} />
          </div>
          <div className="images">
            <LazyImage width={1200} height={675} src={require('./img/boston/boston1.jpg')} alt="boston" label="Via iart AG" />
            <LazyImage width={1200} height={675} src={require('./img/boston/boston7.jpg')} alt="boston" label="Via iart AG" />
          </div>
        </section>
        <section className="image-left">
          <div className="text">
            <p dangerouslySetInnerHTML={{__html: strings.project[5].Description4[activeLang]}} />
            <p dangerouslySetInnerHTML={{__html: strings.project[5].Description5[activeLang]}} />
          </div>
          <div className="images">  
            <LazyImage width={683} height={1024} src={require('./img/boston/boston2.jpg')} alt="boston" label="Via iart AG" />
          </div>
        </section>
        <section>
          <div className="text">
            <p dangerouslySetInnerHTML={{__html: strings.project[5].Description6[activeLang]}} />
          </div>
          <div className="images">  
            <LazyImage width={683} height={1024} src={require('./img/boston/boston5.jpg')} alt="boston" label="Via iart AG" />
          </div>
        </section>
      </article>}
    </section>
  );
}

export default Project;