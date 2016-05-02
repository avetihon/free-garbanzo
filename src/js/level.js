/**
 * This class control level element
 */

import { Snake } from './snake.js';
import { Food } from './food.js';

class Level {

  constructor(element) {
    this.element = element;
  }

  initNewLevel() {
    const snake = new Snake(this.element);
    const food = new Food(this.element);
    snake.initNewSnake();
    food.initNewFood();
  }

  getLevel() {
    return this.element;
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

  createRandomNumbers(min, max) {
    let number = Math.random() * (max - min);
    number = number - number % 10;

    return number;
  }

  levelRegion() {
    const width = this.getLevelCoordinates().right - this.getLevelCoordinates().left;
    const height = this.getLevelCoordinates().bottom - this.getLevelCoordinates().top;

    return {
      width,
      height,
    };
  }

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  // generateSnakePosition() {
  //   const min = 0;
  //   const maxWidth = this.getLevelWidth();
  //   const maxHeight = this.getLevelHeight();
  //   const randomTop = this.createRandomNumbers(min, maxHeight);
  //   const randomLeft = this.createRandomNumbers(min, maxWidth);

  //   return {
  //     randomTop,
  //     randomLeft,
  //   };
  // }
}

export const test = new Level(document.querySelector('.level'));
