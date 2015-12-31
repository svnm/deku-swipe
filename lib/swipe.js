'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swipeJsIso = require('swipe-js-iso');

var _swipeJsIso2 = _interopRequireDefault(_swipeJsIso);

var _virtualElement = require('virtual-element');

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx element */

var Swipe = {
  initialState: function initialState() {
    return { secondsElapsed: 0 };
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

  render: function render(component) {
    var props = component.props;
    var state = component.state;
    var arrows = props.arrows;
    var arrowNext = props.arrowNext;
    var arrowPrev = props.arrowPrev;
    var children = props.children;
    var classPrefix = props.classPrefix;

    function getArrows() {
      if (!arrows) return null;

      return (0, _virtualElement2.default)(
        'div',
        { 'class': classPrefix + '__arrows', 'class': 'swipe-buttons' },
        (0, _virtualElement2.default)(
          'button',
          { 'class': classPrefix + '__arrows  ' + classPrefix + '__arrows--prev' },
          arrowPrev || null
        ),
        (0, _virtualElement2.default)(
          'button',
          { 'class': classPrefix + '__arrows  ' + classPrefix + '__arrows--next' },
          arrowNext || null
        )
      );
    }

    return (0, _virtualElement2.default)(
      'div',
      { id: 'deku-swipe', 'class': '' + classPrefix },
      (0, _virtualElement2.default)(
        'div',
        { 'class': classPrefix + '__wrap' },
        children
      ),
      getArrows()
    );
  },
  afterUpdate: function afterUpdate(component) {
    var props = component.props;
    var state = component.state;
  },
  afterMount: function afterMount(component, el, setState) {
    var props = component.props;
    var state = component.state;
    var arrows = props.arrows;
    var startSlide = props.startSlide;
    var speed = props.speed;
    var auto = props.auto;
    var continuous = props.continuous;
    var callback = props.callback;
    var transitionEnd = props.transitionEnd;
    var classPrefix = props.classPrefix;

    var swipe = (0, _swipeJsIso2.default)(document.getElementById('deku-swipe'), {
      startSlide: startSlide,
      speed: speed,
      auto: auto,
      continuous: continuous,
      callback: callback,
      transitionEnd: transitionEnd
    });

    if (arrows) {
      var prev = el.querySelector('.' + classPrefix + '__arrows--prev');
      var next = el.querySelector('.' + classPrefix + '__arrows--next');

      prev.addEventListener('click', function (e) {
        e.preventDefault();
        swipe.prev();
      });

      next.addEventListener('click', function (e) {
        e.preventDefault();
        swipe.next();
      });
    }
  },
  beforeUnmount: function beforeUnmount(component) {
    clearInterval(component.interval);
  }
};

exports.default = Swipe;