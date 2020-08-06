import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import CloseIcon from '@material-ui/icons/Close';
import Classnames from 'classnames';
import './Project.scss';

function Project(props) {
	const {
		openProjectId 
	} = props;

	React.useLayoutEffect(() => {

	}, []);

  const classes = Classnames({
    
  });

  return (
    <Project id="project" className={classes}>
	    
    </Project>
  );
}

export default Project;