"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = exports.Snake = function () {
  function Snake(element, positionX, positionY) {
    _classCallCheck(this, Snake);

    this.element.style.top = positionX + "px";
    this.element.style.left = positionY + "px";
  }

  _createClass(Snake, [{
    key: "moveLeft",
    value: function moveLeft() {
      this.element.style.left = -10;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.element.style.left = +10;
    }
  }]);

  return Snake;
}();

// export default 'Bears!';
'use strict';

var _snake = require('snake');

var level = document.querySelector('.level');
var levelCoordinates = level.getBoundingClientRect();
var levelWidth = levelCoordinates.right - levelCoordinates.left;
var levelHeight = levelCoordinates.bottom - levelCoordinates.top;

var snake = document.createElement('div');
snake.className = 'snake';
snake.style.top = '20px';
snake.style.left = '10px';

level.appendChild(snake);

// import bear from 'snake.js';
// console.log(bear);
'use strict';

(function () {
  'use strict';

  var currentTitle = document.title;

  /* little funnies */
  window.addEventListener('blur', function () {
    return document.title = 'We miss you...';
  });
  window.addEventListener('focus', function () {
    return document.title = currentTitle;
  });

  // const body = document.getElementsByTagName('body')[0];
  // const scene = document.createElement('section');

  // scene.className = 'scene';
  // body.appendChild(scene);
})();