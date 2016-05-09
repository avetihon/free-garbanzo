/**
 * This class control all checks and snake movement
 */

const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

export class Engine {

  constructor(level, snake, food) {
    this.level = level;
    this.snake = snake;
    this.food = food;
  }

  startNewGame() {
    const newFoodCoord = this.generateNewFoodCoordinates();

    this.snake.initNewSnake();
    this.food.initNewFood(newFoodCoord.foodXCoord, newFoodCoord.foodYCoord);
    this.setupControll();
  }


  /* GAMEPLAY PART ***/

  checkBoundaries() {
    const snakeXCoord = this.snake.snakeHead.headXCoord;
    const snakeYCoord = this.snake.snakeHead.headYCoord;
    const snakePart = this.snake.currentSnakePartsCoordinates();
    const levelSize = this.level.levelArea();

    snakePart.pop();

    if (snakeYCoord < 0 || snakeXCoord < 0 || snakeXCoord > levelSize.width || snakeYCoord > levelSize.height) {
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
    }
  }

  generateNewFoodCoordinates() {
    const levelArea = this.level.levelArea();
    const snakeParts = this.snake.currentSnakePartsCoordinates();

    let foodXCoord = this.createRandomPixelNumbers(0, levelArea.width);
    let foodYCoord = this.createRandomPixelNumbers(0, levelArea.height);

    for (const i in snakeParts) {
      if (foodXCoord === snakeParts[i][0]) {
        foodXCoord = this.createRandomPixelNumbers(0, levelArea.width);
      }

      if (foodYCoord === snakeParts[i][1]) {
        foodYCoord = this.createRandomPixelNumbers(0, levelArea.height);
      }
    }

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
        this.snake.moveBody(snakeXCoord, snakeYCoord - 10);
        break;
      }
      case 'bottom': {
        this.snake.moveBody(snakeXCoord, snakeYCoord + 10);
        break;
      }
      case 'left': {
        this.snake.moveBody(snakeXCoord - 10, snakeYCoord);
        break;
      }
      case 'right': {
        this.snake.moveBody(snakeXCoord + 10, snakeYCoord);
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

  set requestNumber(interval) {
    this.interval = interval;
  }

  get requestNumber() {
    return this.interval;
  }

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

  // clear current time interval and setup new
  gameLoop() {
    const requestID = this.requestNumber;

    if (requestID) {
      cancelAnimationFrame(requestID);
    }

    // request another frame
    const newRequestID = requestAnimationFrame(() => this.gameLoop());

    // calc elapsed time since last loop
    const currentTime = Date.now();
    const delta = currentTime - this.lastTime;

    if (delta > (1000 / 8)) {

      this.lastTime = currentTime - (delta % (1000 / 8));

      this.newMoveDirection();
      this.requestNumber = newRequestID;

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

  /**
   * Init event listener on keydown event
   **/
  setupControll() {
    window.addEventListener('keydown', event => {
      this.contolsKeyboard(event);
    });
  }

  /* Util ***/
  createRandomPixelNumbers(min, max) {
    let number = Math.random() * (max - min);
    number = number - number % 10;
    return `${number}px`;
  }
}
