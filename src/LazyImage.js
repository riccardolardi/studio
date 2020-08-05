import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LazyImage(props) {

  function onLoad(event) {
    event.target.classList.add('loaded');
  }

  return (<React.Fragment>
    <LazyLoadImage 
      src={props.src} 
      alt={props.alt} 
      onLoad={event => onLoad(event)} 
    />
    <img 
      className="placeholder" 
      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${props.width}' 
        height='${props.height}' %3E%3C/svg%3E`} alt="placeholder" />
  </React.Fragment>);
}

export default LazyImage;