import { Level } from './level.js';
import { Snake } from './snake.js';
import { Food } from './food.js';
import { Engine } from './engine.js';
import { Settings } from './settings.js';
import { Interface } from './interface.js';

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

const gameInterface = new Interface();
const level = new Level(document.querySelector('.level'), Settings);
const snake = new Snake(document.querySelector('.level'), Settings);
const food = new Food(document.querySelector('.level'));
const engine = new Engine(level, snake, food, Settings);
engine.startNewGame();

changeTitleModule.init();
