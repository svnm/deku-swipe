/** @jsx dom */
import dom from 'magic-virtual-element'
import Swipe from 'swipe-js-iso'

const propTypes = {
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
}

const defaultProps = {
  classPrefix: 'deku-swipe'
}

function initialState () {
  return {}
}

function afterMount ({props}, el, setState) {

  const {arrows, startSlide, speed, auto, continuous, callback, transitionEnd, classPrefix} = props

  const swipe = Swipe(document.getElementById('deku-swipe'), {
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
}

function render({props, state}) {
  const {arrows, arrowNext, arrowPrev, children, classPrefix } = props

  function getArrows() {
    if (!arrows) {
      return null
    }

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
}

export default {afterMount, initialState, propTypes, defaultProps, render}