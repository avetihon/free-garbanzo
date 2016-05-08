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
    this.snake.initNewSnake();
    this.food.initNewFood();
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

      this.snake.addToSnakeNewTail();
      this.generateNewFoodCoordinates();
    }
  }

  generateNewFoodCoordinates() {
    const levelArea = this.level.levelArea();
    const snakeParts = this.snake.currentSnakePartsCoordinates();

    let foodXCoord = this.createRandomNumbers(0, levelArea.width);
    let foodYCoord = this.createRandomNumbers(0, levelArea.height);

    for (const i in snakeParts) {
      if (foodXCoord === snakeParts[i][0]) {
        foodXCoord = this.createRandomPixelNumbers(0, levelArea.width);
      }

      if (foodYCoord === snakeParts[i][1]) {
        foodYCoord = this.createRandomPixelNumbers(0, levelArea.height);
      }
    }

    this.food.setToFoodNewPosition(foodXCoord, foodYCoord);
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

    this.restartInterval();
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
