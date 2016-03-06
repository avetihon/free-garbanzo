import { Snake } from './snake.js';

class Level {

  constructor(element) {
    this.element = element;
  }

  getLevelCoordinates() {
    return this.element.getBoundingClientRect();
  }

  getLevelWidth() {
    const levelWidth = this.getLevelCoordinates().right - this.getLevelCoordinates().left;
    return levelWidth;
  }

  getLevelHeight() {
    const levelHeight = this.getLevelCoordinates().bottom - this.getLevelCoordinates().top;
    return levelHeight;
  }
  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  generateSnakePosition() {
    const min = 0;
    const maxWidth = this.getLevelWidth();
    const maxHeight = this.getLevelHeight();
    const randTop = Math.round(Math.random() * (maxWidth - min) + min);
    const randLeft = Math.round(Math.random() * (maxHeight - min) + min);

    return {
      randomTop: randTop,
      randomLeft: randLeft,
    };
  }
}

const level = document.querySelector('.level');
const snakeElement = document.createElement('div');
snakeElement.className = 'snake__part snake__part--head';
level.appendChild(snakeElement);


const test = new Level(document.querySelector('.level'));
const snake = new Snake(
  snakeElement,
  test.generateSnakePosition().randomTop,
  test.generateSnakePosition().randomLeft
);

window.addEventListener('click', event => snake.init());

window.addEventListener('keydown', event => {
  snake.contolsKeyboard(event);
});
