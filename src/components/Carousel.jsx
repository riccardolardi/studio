import { createRef } from 'preact'
import { useLayoutEffect } from 'preact/hooks'
import Flickity from 'flickity'
import 'flickity-imagesloaded'
import 'flickity/dist/flickity.min.css'

const Carousel = ({ children }) => {
  const elRef = createRef()

  useLayoutEffect(() => {
    new Flickity(elRef.current, {
      prevNextButtons: false,
      percentPosition: true,
      adaptiveHeight: true,
      cellSelector: 'figure',
      imagesLoaded: true,
    })
  }, [])

  return (
    <div ref={elRef} className="carousel">
      {children}
    </div>
  )
}

export default Carousel
