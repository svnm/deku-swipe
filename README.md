# deku-swipe

[![npm version](https://badge.fury.io/js/deku-swipe.svg)](https://badge.fury.io/js/deku-swipe)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

[Brad Birdsall](https://github.com/thebird)'s [Swipe.js](http://swipejs.com) as a deku component

## Installation

```sh
npm install deku-swipe
```

## Deku Versions

- `1.0.x` - depends on Deku `0.5.x`

## Usage

```javascript

/** @jsx dom */
import dom from 'magic-virtual-element'
import {render, tree} from 'deku'
import Swipe from 'deku-swipe'

const app = tree(	
  <Swipe arrows={true} startSlide={2} speed={1200} arrowPrev='ey prev' arrowNext='ey next'>
    <div>slide 0</div>
    <div>slide 1</div>
    <div>slide 2</div>
    <div>another slide</div>
  </Swipe>
);

render(app, document.getElementById('root'))
```

## Example styles

```css
.deku-swipe {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.deku-swipe__wrap {
  overflow: hidden;
  position: relative;
  height: 100px;
  background-color: black;
  color: pink;
}
.deku-swipe__wrap > div {
  float:left;
  width:100%;
  position: relative;
}
```

## Props


- **startSlide** Integer *(default:0)* - index position Swipe should start at

- **speed** Integer *(default:300)* - speed of prev and next transitions in milliseconds.

- **auto** Integer - begin with auto slideshow (time in milliseconds between slides)

- **continuous** Boolean *(default:true)* - create an infinite feel with no endpoints

- **callback** Function - runs at slide change.

- **transitionEnd** Function - runs at the end slide transition.

**MIT**
