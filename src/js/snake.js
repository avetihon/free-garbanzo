const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

export class Snake {
  constructor(element, positionX, positionY) {
    this.element = element;
    this.element.style.top = `${positionX}px`;
    this.element.style.left = `${positionY}px`;

    const snakePart = document.createElement('div');
    snakePart.className = 'snake__part';
    snakePart.style.top = `${positionX}px`;
    snakePart.style.left = `${positionY - 20}px`;
    this.element.parentNode.insertBefore(snakePart, this.element);

    const snakePart1 = document.createElement('div');
    snakePart1.className = 'snake__part';
    snakePart1.style.top = `${positionX}px`;
    snakePart1.style.left = `${positionY - 10}px`;
    this.element.parentNode.insertBefore(snakePart1, this.element);
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
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10);
    const positionY = parseInt(snakeHead.style.top, 10) - 10;
    this.moveBody(positionX, positionY);
  }

  moveBottom() {
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10);
    const positionY = parseInt(snakeHead.style.top, 10) + 10;
    this.moveBody(positionX, positionY);
  }

  moveLeft() {
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10) - 10;
    const positionY = parseInt(snakeHead.style.top, 10);
    this.moveBody(positionX, positionY);
  }

  moveRight() {
    const snakeHead = document.querySelector('.snake__part--head');
    const positionX = parseInt(snakeHead.style.left, 10) + 10;
    const positionY = parseInt(snakeHead.style.top, 10);
    this.moveBody(positionX, positionY);
  }

  setInterval(interval) {
    this.interval = interval;
  }

  getInterval() {
    return this.interval;
  }

  moveTo(direction) {
    const interval = this.getInterval();
    let newInterval;
    if (interval) {
      clearInterval(interval);
      newInterval = setInterval(() => {
        direction.call(this);
      }, 500);
      this.setInterval(newInterval);
    } else {
      newInterval = setInterval(() => {
        direction.call(this);
      }, 500);
      this.setInterval(newInterval);
    }
  }

  contolsKeyboard(event) {
    const key = event.keyCode || event.which;

    if (key === KEY_A) {
      this.moveTo(this.moveLeft);
    } else if (key === KEY_D) {
      this.moveTo(this.moveRight);
    } else if (key === KEY_W) {
      this.moveTo(this.moveTop);
    } else if (key === KEY_S) {
      this.moveTo(this.moveBottom);
    }
  }

  eatFood() {

  }
}
