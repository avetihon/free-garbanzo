import { Snake } from './snake.js';

class Level {
  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  static generateSnakePosition(maxWidth, maxHeight) {
    const min = 0;
    const randTop = Math.round(Math.random() * (maxWidth - min) + min);
    const randLeft = Math.round(Math.random() * (maxHeight - min) + min);

    return {
      randomTop: randTop,
      randomLeft: randLeft,
    };
  }
}

const level = document.querySelector('.level');
const levelCoordinates = level.getBoundingClientRect();
const levelWidth = levelCoordinates.right - levelCoordinates.left;
const levelHeight = levelCoordinates.bottom - levelCoordinates.top;

const snakeElement = document.createElement('div');
snakeElement.className = 'snake';

const snake = new Snake(
  snakeElement,
  Level.generateSnakePosition(levelWidth, levelHeight).randomTop,
  Level.generateSnakePosition(levelWidth, levelHeight).randomLeft
);

level.appendChild(snake.element);
window.addEventListener('keypress', event => {
  snake.contolsKeyboard(event);
});

// import bear from 'snake.js';
// console.log(bear);
