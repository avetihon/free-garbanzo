/**
 * This class control all checks and snake movement
 */

const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

import { emmiter } from './event-emmiter.js';

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
    const newFoodCoord = this.generateNewFoodCoordinates();


    this.food.initNewFood(newFoodCoord.foodXCoord, newFoodCoord.foodYCoord);
    this.setupControll();
  }


  /* GAMEPLAY PART ***/

  checkBoundaries() {
    const snakeXCoord = this.snake.snakeHead.headXCoord;
    const snakeYCoord = this.snake.snakeHead.headYCoord;
    const snakePart = this.snake.currentSnakePartsCoordinates();
    const [levelSizeWidth, levelSizeHeight] = this.level.levelArea();

    snakePart.pop();

    if (snakeYCoord < 0 || snakeXCoord < 0 || snakeXCoord > levelSizeWidth || snakeYCoord > levelSizeHeight) {
      console.log('we broken');
    }

    for (const i in snakePart) {
      if (`${snakeXCoord}px` === snakePart[i][0] && `${snakeYCoord}px` === snakePart[i][1]) {
        console.log('nam pizda');
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
    const snakeXCoord = this.snake.snakeHead.headXCoord;
    const snakeYCoord = this.snake.snakeHead.headYCoord;

    const foodXCoord = this.food.getFoodPosition().foodXCoord;
    const foodYCoord = this.food.getFoodPosition().foodYCoord;

    if (snakeXCoord === foodXCoord && snakeYCoord === foodYCoord) {
      // using snake tail coordinates, that removes when snake make one move

      const newFoodCoord = this.generateNewFoodCoordinates();

      this.snake.addToSnakeNewTail();
      this.food.setToFoodNewPosition(newFoodCoord.foodXCoord, newFoodCoord.foodYCoord);
      emmiter.emit('updateScores');
    }
  }

  generateNewFoodCoordinates() {
    const arratOfLevelCoord = this.level.levelArrayOfCoordinates();
    const snakeParts = this.snake.currentSnakePartsCoordinates();

    const snakePartsTwo = this.snake.currentSnakePartsCoordinatesTwo();

    // console.log(arratOfLevelCoord)
    const arrayOfEmptyCoordinates = arratOfLevelCoord.filter((item, i) => {
      snakePartsTwo.forEach((snake) => {
        // console.log(snake[0])
        // console.log(item[0])
        return item[0] !== snake[0] && item[1] !== snake[1];
      });
    });

    // console.log(arrayOfEmptyCoordinates)



    ////////////
    const [levelSizeWidth, levelSizeHeight] = this.level.levelArea();


    let foodXCoord = this.createRandomPixelNumbers(0, levelSizeWidth);
    let foodYCoord = this.createRandomPixelNumbers(0, levelSizeHeight);

    for (const i in snakeParts) {
      if (foodXCoord === snakeParts[i][0]) {
        foodXCoord = this.createRandomPixelNumbers(0, levelSizeWidth);
      }

      if (foodYCoord === snakeParts[i][1]) {
        foodYCoord = this.createRandomPixelNumbers(0, levelSizeHeight);
      }
    }


    // console.log(snakeParts)
    // console.log(foodXCoord + ' ' + foodYCoord)

    return {
      foodXCoord,
      foodYCoord,
    };
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

    const snakeXCoord = this.snake.snakeHead.headXCoord;
    const snakeYCoord = this.snake.snakeHead.headYCoord;

    switch (moveDirection) {
      case 'top': {
        this.snake.moveBody(snakeXCoord, snakeYCoord - this.settings.componentSize());
        break;
      }
      case 'bottom': {
        this.snake.moveBody(snakeXCoord, snakeYCoord + this.settings.componentSize());
        break;
      }
      case 'left': {
        this.snake.moveBody(snakeXCoord - this.settings.componentSize(), snakeYCoord);
        break;
      }
      case 'right': {
        this.snake.moveBody(snakeXCoord + this.settings.componentSize(), snakeYCoord);
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

  set requestNumberID(interval) {
    this.interval = interval;
  }

  get requestNumberID() {
    return this.interval;
  }

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

  // clear current time interval and setup new
  gameLoop() {
    // const requestID = this.requestNumberID;

    // if (requestID) {
    //   cancelAnimationFrame(requestID);
    // }

    // request another frame
    // if (this.isRunning) {
      // const newRequestID = requestAnimationFrame(() => this.gameLoop());
    // }

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
      // this.requestNumberID = newRequestID;
    }
  }

  /**
   * Keyboards key handler
   */
  contolsKeyboard(event) {
    const key = event.keyCode || event.which;
    const currentDirection = this.moveDirection; // prevents movement of the snake through itself

    if (key === KEY_A && currentDirection !== 'right') {
      this.moveDirection = 'left';
    } else if (key === KEY_D && currentDirection !== 'left') {
      this.moveDirection = 'right';
    } else if (key === KEY_W && currentDirection !== 'top') {
      this.moveDirection = 'top';
    } else if (key === KEY_S && currentDirection !== 'bottom') {
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
  /* Util ***/
  createRandomPixelNumbers(min, max) {
    let number = Math.random() * (max - min);
    number = number - number % this.settings.componentSize();
    return `${number}px`;
  }
}
