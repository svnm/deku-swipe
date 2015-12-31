/** @jsx element */

import SwipeJs from 'swipe-js-iso'
import element from 'virtual-element'

let Swipe = {

  initialState () {
    return { secondsElapsed: 0 }
  },

  propTypes: {
    classPrefix: {
      type: 'string'
    },
    startSlide: {
      type: 'number'
    },
    slideToIndex: {
      type: 'number'
    },
    speed: {
      type: 'number'
    },
    auto: {
      type: 'number'
    },
    continuous: {
      type: 'boolean'
    },
    callback: {
      type: 'function'
    },
    transitionEnd: {
      type: 'function'
    }
  },

  defaultProps: {
    classPrefix: 'deku-swipe'
  },

  render (component) {
    let { props, state } = component;

    const {arrows, arrowNext, arrowPrev, children, classPrefix } = props

    function getArrows() {
      if (!arrows) return null

      return (
        <div class={`${classPrefix}__arrows`} class='swipe-buttons'>
          <button class={`${classPrefix}__arrows  ${classPrefix}__arrows--prev`}>
            {arrowPrev || null}
          </button>
          <button class={`${classPrefix}__arrows  ${classPrefix}__arrows--next`}>
            {arrowNext || null}
          </button>
        </div>
      )
    }

    return (
        <div id='deku-swipe' class={`${classPrefix}`}>
          <div class={`${classPrefix}__wrap`} >
            {children}
          </div>
          {getArrows()}
        </div>
    )

  },

  afterUpdate (component) {
    let { props, state } = component;
  },

  afterMount (component, el, setState) {

    let { props, state } = component;

    const {arrows, startSlide, speed, auto, continuous, callback, transitionEnd, classPrefix} = props

    const swipe = SwipeJs(document.getElementById('deku-swipe'), {
      startSlide: startSlide,
      speed: speed,
      auto: auto,
      continuous: continuous,
      callback: callback,
      transitionEnd: transitionEnd
    })

    if (arrows) {
      const prev = el.querySelector(`.${classPrefix}__arrows--prev`)
      const next = el.querySelector(`.${classPrefix}__arrows--next`)

      prev.addEventListener('click', e => {
        e.preventDefault()
        swipe.prev()
      })

      next.addEventListener('click', e => {
        e.preventDefault()
        swipe.next()
      })
    }
  },

  beforeUnmount (component) {
    clearInterval(component.interval);
  }

}

export default Swipe
