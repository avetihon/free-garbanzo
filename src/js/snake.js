/**
 * This class control snake element
 */
import { Food } from './food.js';

const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

const food = new Food();

export class Snake {

  constructor(level) {
    this.level = level;
  }

  initNewSnake() {
    // create new div with some attr
    const snakeElement = document.createElement('div');
    snakeElement.className = 'snake__part snake__part--head';
    snakeElement.style.top = '40px';
    snakeElement.style.left = '40px';

    // append to level my snake
    this.level.appendChild(snakeElement);

    // create reference on current snake element
    this.element = snakeElement;

    // init remaining snake body parts
    this.initSnakeBody(7);

    // init controll
    this.setupControll();
  }

  get element() {
    return this.value;
  }

  set element(value) {
    this.value = value;
  }

  initSnakeBody(partCount) {
    let i = partCount;
    const headYCoord = parseInt(this.element.style.top, 10);
    const headXCoord = parseInt(this.element.style.left, 10);
    while (i > 0) {
      const newHeadXCoord = headXCoord - (i * 10);
      this.addNewSnakePart(`${newHeadXCoord}px`, `${headYCoord}px`, this.element);

      i--;
    }
  }

  /**
   * Universal function that add new part to snake body
   */
  addNewSnakePart(coordX, coordY, element) {
    const snakePart = document.createElement('div');
    snakePart.className = 'snake__part';
    snakePart.style.top = coordY;
    snakePart.style.left = coordX;
    // console.log(coordX + ' ' + coordY)
    // this.element.parentNode.firstChild
    this.element.parentNode.insertBefore(snakePart, element);
  }

  /**
   * Set reference to snake tail
   */
  set snakeTail(tail) {
    this.tail = tail;
  }

  /**
   * Get reference to snake tail
   */
  get snakeTail() {
    return this.tail;
  }

  /**
   * Function that controll moving all snake part
   */
  moveBody(posX, posY) {
    const snakeParts = document.querySelectorAll('.snake__part');
    const arrayOfCoordinates = [];

    for (const snake of Array.from(snakeParts)) {
      arrayOfCoordinates.push([snake.style.left, snake.style.top]);
    }

    arrayOfCoordinates.push([`${posX}px`, `${posY}px`]);
    this.snakeTail = arrayOfCoordinates.shift();

    // change the old coordinates to the new
    for (let i = 0; i < snakeParts.length; i++) {
      snakeParts[i].style.left = arrayOfCoordinates[i][0];
      snakeParts[i].style.top = arrayOfCoordinates[i][1];
    }

    this.checkFood();
  }

  /**
   * Function controll snake direction move
   */
  newMoveDirection() {
    const moveDirection = this.moveDirection;
    const snakeHead = document.querySelector('.snake__part--head');
    let positionX;
    let positionY;

    switch (moveDirection) {
      case 'top': {
        positionX = parseInt(snakeHead.style.left, 10);
        positionY = parseInt(snakeHead.style.top, 10) - 10;
        break;
      }
      case 'bottom': {
        positionX = parseInt(snakeHead.style.left, 10);
        positionY = parseInt(snakeHead.style.top, 10) + 10;
        break;
      }
      case 'left': {
        positionX = parseInt(snakeHead.style.left, 10) - 10;
        positionY = parseInt(snakeHead.style.top, 10);
        break;
      }
      case 'right': {
        positionX = parseInt(snakeHead.style.left, 10) + 10;
        positionY = parseInt(snakeHead.style.top, 10);
        break;
      }
      default: {
        console.warn('Something wrong');
      }
    }

    this.moveBody(positionX, positionY);
  }

  // get current snake movement direction
  get moveDirection() {
    return this.direction;
  }

  // setup current snake movement direction
  set moveDirection(direction) {
    this.direction = direction;
  }

  set intervalNumber(interval) {
    this.interval = interval;
  }

  get intervalNumber() {
    return this.interval;
  }

  // clear current time interval and setup new
  restartInterval() {
    const time = 300;
    const interval = this.intervalNumber;

    if (interval) {
      clearInterval(interval);
    }

    const newInterval = setInterval(() => {
      this.newMoveDirection();
    }, time);

    this.intervalNumber = newInterval;
  }

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
   * At every move check
   * Where is food placed and where is now snake head
   * If they match - add to snake new part and re arrange food
   */
  checkFood() {
    const headYCoord = parseInt(this.element.style.top, 10);
    const headXCoord = parseInt(this.element.style.left, 10);

    const foodYCoord = food.getCurrentFoodPosition().foodYCoord;
    const foodXCoord = food.getCurrentFoodPosition().foodXCoord;
    if (headYCoord === foodYCoord && headXCoord === foodXCoord) {
      // using snake tail coordinates, that remove when snake make one move
      this.addNewSnakePart(this.snakeTail[0], this.snakeTail[1], this.element.parentNode.firstChild);
      food.setFoodNewPosition();
    }
    // if(head === food)
  }

  setupControll() {
    window.addEventListener('keydown', event => {
      this.contolsKeyboard(event);
    });
  }
}
