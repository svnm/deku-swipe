/** @jsx dom */
import dom from 'magic-virtual-element'
import {render, tree} from 'deku'
import Swipe from '../lib/swipe.js'

const app = tree(
  <Swipe arrows={true} startSlide={2} speed={1200} arrowPrev='ey prev' arrowNext='ey next'>
    <div>slide 0</div>
    <div>slide 1</div>
    <div>slide 2</div>
    <div>another slide</div>
  </Swipe>
)

render(app, document.getElementById('root'))
