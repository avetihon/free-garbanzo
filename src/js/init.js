import { Level } from './level.js';
import { Snake } from './snake.js';
import { Food } from './food.js';
import { Engine } from './engine.js';
import { settings } from './settings.js';
import { Interface } from './interface.js';
import { titleModule } from './utility-module.js';

const gameInterface = new Interface(settings);
const level = new Level(settings);
const snake = new Snake(settings);
const food = new Food();
const engine = new Engine(level, snake, food, settings);
engine.startNewGame();

titleModule.init();
