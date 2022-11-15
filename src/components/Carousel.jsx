import { useRef, useLayoutEffect } from 'react'
import Flickity from 'flickity'
import 'flickity-imagesloaded'
import 'flickity/dist/flickity.min.css'

const Carousel = ({ children }) => {
  const elRef = useRef(null)

  useLayoutEffect(() => {
    new Flickity(elRef.current, {
      prevNextButtons: false,
      percentPosition: true,
      adaptiveHeight: true,
      cellSelector: 'figure',
      imagesLoaded: true,
    })
    ;(() => {
      // https://github.com/metafizzy/flickity/issues/740
      let startX = 0
      elRef.current.ontouchstart = (e) => {
        startX = e.touches[0].clientX
      }
      elRef.current.ontouchmove = (e) => {
        if (Math.abs(e.touches[0].clientX - startX) > 5 && e.cancelable) {
          e.preventDefault()
        }
      }
    })()
  }, [])

  return (
    <div ref={elRef} className="carousel">
      {children}
    </div>
  )
}

export default Carousel
