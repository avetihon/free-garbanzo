import { Level } from './level.js';
import { Snake } from './snake.js';
import { Food } from './food.js';
import { Engine } from './engine.js';

export const setupModule = (() => {
  const elementsSize = 10;
  const levelWidth = 300;
  const levelHeight = 200;

  return {
    elementsSize,
    levelWidth,
    levelHeight,
  };
})();

const changeTitleModule = (() => {
  const currentTitle = document.title;

  const event = () => {
    /* little funnies */
    window.addEventListener('blur', () => document.title = 'We miss you...');
    window.addEventListener('focus', () => document.title = currentTitle);
  };

  const init = () => {
    event();
  };

  return {
    init,
  };
})();

export const level = new Level(document.querySelector('.level'));
export const snake = new Snake(document.querySelector('.level'));
export const food = new Food(document.querySelector('.level'));

const engine = new Engine(level, snake, food);
engine.startNewGame();

changeTitleModule.init();
