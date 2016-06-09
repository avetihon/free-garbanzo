/**
 * This class control all checks and snake movement
 */

import { emmiter } from './event-emmiter.js';
import _ from 'lodash';

export class Engine {

  constructor(level, snake, food, settings) {
    this.level = level;
    this.snake = snake;
    this.food = food;
    this.settings = settings;
  }

  startNewGame() {
    this.level.createLevelPalette();
    this.snake.initNewSnake();
    const foodCoord = this.generateNewFoodCoordinates();
    this.food.initNewFood(foodCoord.x, foodCoord.y);
    this.setupControll();
  }


  /* GAMEPLAY PART ***/

  checkBoundaries() {
    const snakeXCoord = this.snake.snakeHead.x;
    const snakeYCoord = this.snake.snakeHead.y;
    const snakePart = this.snake.currentSnakePartsCoordinates();
    const { width, height } = this.level.levelArea();

    // remove snake head coordinates
    snakePart.pop();

    if (snakeYCoord < 0
     || snakeXCoord < 0
     || snakeXCoord > width
     || snakeYCoord > height) {
      console.log('Game Over');
    }

    for (const i in snakePart) {
      if (snakeXCoord === snakePart[i].x && snakeYCoord === snakePart[i].y) {
        console.log('Game Over');
      }
    }
  }

  /* FOOD PART ***/

  /**
   * At each move check
   * Where is food placed and where is now snake head
   * If they match - add to snake new part and re-arrange food
   */
  checkIsSnakeEatFood() {
    const snakeXCoord = this.snake.snakeHead.x;
    const snakeYCoord = this.snake.snakeHead.y;

    const foodXCoord = this.food.getFoodPosition().x;
    const foodYCoord = this.food.getFoodPosition().y;

    if (snakeXCoord === foodXCoord && snakeYCoord === foodYCoord) {
      // using snake tail coordinates, that removes when snake make one step

      const newFoodCoord = this.generateNewFoodCoordinates();

      this.snake.addToSnakeNewTail();
      this.food.setToFoodNewPosition(newFoodCoord.x, newFoodCoord.y);
      emmiter.emit('updateScores');
    }
  }

  generateNewFoodCoordinates() {
    const levelCoordinates = this.level.levelCoordinates();
    const snakeCoordinates = this.snake.currentSnakePartsCoordinates();

    const res = _.differenceWith(levelCoordinates, snakeCoordinates, _.isEqual);
    const randomCoordinate = Math.floor((Math.random() * res.length) + 1);

    return res[randomCoordinate];
  }

  /* MOVE PART ***/

  // get current snake movement direction
  get moveDirection() {
    return this.direction;
  }

  // setup current snake movement direction
  set moveDirection(direction) {
    this.direction = direction;
  }

  /**
   * Function controll snake direction move
   */
  newMoveDirection() {
    const moveDirection = this.moveDirection;

    const snakeXCoord = this.snake.snakeHead.x;
    const snakeYCoord = this.snake.snakeHead.y;

    switch (moveDirection) {
      case 'top': {
        this.snake.moveBody(snakeXCoord, snakeYCoord - this.settings.componentSize);
        break;
      }
      case 'bottom': {
        this.snake.moveBody(snakeXCoord, snakeYCoord + this.settings.componentSize);
        break;
      }
      case 'left': {
        this.snake.moveBody(snakeXCoord - this.settings.componentSize, snakeYCoord);
        break;
      }
      case 'right': {
        this.snake.moveBody(snakeXCoord + this.settings.componentSize, snakeYCoord);
        break;
      }
      default: {
        console.warn('Something wrong');
      }
    }

    // after move check
    this.checkIsSnakeEatFood();
    this.checkBoundaries();
  }

  /* GAME LOOP PART */

  // get the last time create new frame
  get lastTime() {
    let value;

    if (!this.time) {
      value = 0;
    } else {
      value = this.time;
    }

    return value;
  }

  set lastTime(time) {
    this.time = time;
  }

  // prop for set or take off from pause
  get isRunning() {
    if (typeof this.running === 'undefined') {
      this.running = true;
    }

    return this.running;
  }

  set isRunning(running) {
    this.running = running;
  }

  // controll game loop
  gameLoop() {
    if (this.isRunning) {
      requestAnimationFrame(() => this.gameLoop());
    }

    // calc elapsed time since last loop
    const currentTime = Date.now();
    const delta = currentTime - this.lastTime;

    // if enough time has elapsed, draw the next frame
    if (delta > (1000 / 8)) {
      this.lastTime = currentTime - (delta % (1000 / 8));

      this.newMoveDirection();
    }
  }

  /**
   * Keyboards key handler
   */
  contolsKeyboard(event) {
    const key = event.keyCode || event.which;
    const currentDirection = this.moveDirection; // prevents movement of the snake through itself

    if (key === this.settings.keyA && currentDirection !== 'right') {
      this.moveDirection = 'left';
    } else if (key === this.settings.keyD && currentDirection !== 'left') {
      this.moveDirection = 'right';
    } else if (key === this.settings.keyW && currentDirection !== 'top') {
      this.moveDirection = 'top';
    } else if (key === this.settings.keyS && currentDirection !== 'bottom') {
      this.moveDirection = 'bottom';
    }

    requestAnimationFrame(() => this.gameLoop());
  }

  pauseGame() {
    if (this.isRunning) {
      this.isRunning = false;
    } else {
      this.isRunning = true;
      // at once start the snake movement
      requestAnimationFrame(() => this.gameLoop());
    }
  }

  /**
   * Init event listener on keydown event
   **/
  setupControll() {
    window.addEventListener('keydown', event => {
      this.contolsKeyboard(event);
    });

    document.querySelector('.game__pause').addEventListener('click', () => { this.pauseGame(); });
  }
}
