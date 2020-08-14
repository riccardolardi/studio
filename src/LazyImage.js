import React from 'react';

function LazyImage(props) {
  const { src, alt } = props;
  const [isLoaded, setIsLoaded] = React.useState();

  React.useEffect(() => setIsLoaded(true), []);

  return <img src={src} className={`${isLoaded ? 'loaded' : 'not-loaded'}`} alt={alt} />;
}

export default LazyImage;