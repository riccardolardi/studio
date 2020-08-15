import React from 'react';
import Classnames from 'classnames';

const LazyImage = React.memo(function LazyImage(props) {
	const [isIntersecting, setIsIntersecting] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(null);
	const ref = React.useRef(null);

	React.useLayoutEffect(() => {
		const intersectionObserver = new IntersectionObserver(entries => {
			if (entries[0].intersectionRect.height > 0) setIsIntersecting(true);
		});
		intersectionObserver.observe(ref.current);
	}, []);

  const classes = Classnames({
    'lazy-image': true,
    'loaded': isLoaded
  });

  return <figure className={classes} ref={ref}>
		<img className="placeholder" 
			src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${props.width}' 
		  	height='${props.height}' %3E%3C/svg%3E`} alt="placeholder" />
		{isIntersecting && <img src={props.src} alt={props.alt} onLoad={() => setIsLoaded(true)} />}
		{props.label && <figcaption>{props.label}</figcaption>}
  </figure>
});

export default LazyImage;