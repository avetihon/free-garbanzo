const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

export class Snake {
  constructor(element, positionX, positionY) {
    this.element = element;
    this.element.style.top = `${positionX}px`;
    this.element.style.left = `${positionY}px`;

    // const snakePart = document.createElement('div');
    // snakePart.className = 'snake__part';
    // snakePart.style.top = `${positionX}px`;
    // snakePart.style.left = `${positionY - 20}px`;
    // this.element.parentNode.insertBefore(snakePart, this.element);

    // const snakePart1 = document.createElement('div');
    // snakePart1.className = 'snake__part';
    // snakePart1.style.top = `${positionX}px`;
    // snakePart1.style.left = `${positionY - 10}px`;
    // this.element.parentNode.insertBefore(snakePart1, this.element);
  }

  init() {

  }

  moveBody(posX, posY) {
    const snakeParts = document.querySelectorAll('.snake__part');
    const arrayOfCoordinates = [];

    for (const snake of Array.from(snakeParts)) {
      arrayOfCoordinates.push([snake.style.left, snake.style.top]);
    }

    arrayOfCoordinates.push([`${posX}px`, `${posY}px`]);
    arrayOfCoordinates.shift();

    for (let i = 0; i < snakeParts.length; i++) {
      snakeParts[i].style.left = arrayOfCoordinates[i][0];
      snakeParts[i].style.top = arrayOfCoordinates[i][1];
    }
  }

  moveTop() {
    this.moveDirection = 'top';
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10);
    const positionY = parseInt(snakeHead.style.top, 10) - 10;
    this.moveBody(positionX, positionY);
  }

  moveBottom() {
    this.moveDirection = 'bottom';
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10);
    const positionY = parseInt(snakeHead.style.top, 10) + 10;
    this.moveBody(positionX, positionY);
  }

  moveLeft() {
    this.moveDirection = 'left';
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10) - 10;
    const positionY = parseInt(snakeHead.style.top, 10);
    this.moveBody(positionX, positionY);
  }

  moveRight() {
    this.moveDirection = 'right';
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10) + 10;
    const positionY = parseInt(snakeHead.style.top, 10);
    this.moveBody(positionX, positionY);
  }

  setIntervalNumber(interval) {
    this.interval = interval;
  }

  getIntervalNumber() {
    return this.interval;
  }

  setupInterval(direction) {
    const time = 300;
    const newInterval = setInterval(() => {
      direction.call(this);
    }, time);
    this.setIntervalNumber(newInterval);
  }

  get moveDirection() {
    return this.direction;
  }

  set moveDirection(direction) {
    this.direction = direction;
  }

  moveTo(direction) {
    const interval = this.getIntervalNumber();
    if (interval) {
      clearInterval(interval);
    }
    this.setupInterval(direction);
  }

  contolsKeyboard(event) {
    const key = event.keyCode || event.which;
    const currentDirection = this.moveDirection;

    if (key === KEY_A && currentDirection !== 'right') {
      this.moveTo(this.moveLeft);
    } else if (key === KEY_D && currentDirection !== 'left') {
      this.moveTo(this.moveRight);
    } else if (key === KEY_W && currentDirection !== 'top') {
      this.moveTo(this.moveTop);
    } else if (key === KEY_S && currentDirection !== 'bottom') {
      this.moveTo(this.moveBottom);
    }
  }

  eatFood() {

  }
}
