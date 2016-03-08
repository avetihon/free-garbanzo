const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

export class Snake {
  constructor(element, positionX, positionY) {
    this.element = element;
    this.element.style.left = `${positionX}px`;
    this.element.style.top = `${positionY}px`;
  }

  init() {
    let i = 2;
    const headYCoord = parseInt(this.element.style.top, 10);
    const headXCoord = parseInt(this.element.style.left, 10);

    while (i > 0) {
      const snakePart = document.createElement('div');
      snakePart.className = 'snake__part';
      snakePart.style.top = `${headYCoord}px`;
      snakePart.style.left = `${headXCoord - (i * 10)}px`;
      this.element.parentNode.insertBefore(snakePart, this.element);

      i--;
    }
  }

  set lastSnakePart(lastPart) {
    this.lastPart = lastPart;
  }

  get lastSnakePart() {
    return this.lastPart;
  }

  moveBody(posX, posY) {
    const snakeParts = document.querySelectorAll('.snake__part');
    const arrayOfCoordinates = [];

    for (const snake of Array.from(snakeParts)) {
      arrayOfCoordinates.push([snake.style.left, snake.style.top]);
    }

    arrayOfCoordinates.push([`${posX}px`, `${posY}px`]);
    this.lastSnakePart = arrayOfCoordinates.shift();

    for (let i = 0; i < snakeParts.length; i++) {
      snakeParts[i].style.left = arrayOfCoordinates[i][0];
      snakeParts[i].style.top = arrayOfCoordinates[i][1];
    }

    this.eatFood();
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

  set intervalNumber(interval) {
    this.interval = interval;
  }

  get intervalNumber() {
    return this.interval;
  }

  setupInterval(direction) {
    const time = 300;
    const newInterval = setInterval(() => {
      direction.call(this);
    }, time);
    this.intervalNumber = newInterval;
  }

  get moveDirection() {
    return this.direction;
  }

  set moveDirection(direction) {
    this.direction = direction;
  }

  moveTo(direction) {
    const interval = this.intervalNumber;
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



  newSnakePart() {
    // const newPart = this.lastSnakePart;
    // console.log(this.lastSnakePart)
    const newPart = document.createElement('div');
    newPart.className = 'snake__part';
    newPart.style.top = this.lastSnakePart[1];
    newPart.style.left = this.lastSnakePart[0];

    this.element.parentNode.insertBefore(newPart,  this.element.parentNode.firstChild);

    // console.log(newPart)
  }

  eatFood() {
    const headYCoord = parseInt(this.element.style.top, 10);
    const headXCoord = parseInt(this.element.style.left, 10);

    const food = document.querySelector('.level__food');
    const foodYCoord = parseInt(food.style.top, 10);
    const foodXCoord = parseInt(food.style.left, 10);
    if (headYCoord === foodYCoord && headXCoord === foodXCoord) {
      this.newSnakePart();
    }
    // if(head === food)
  }
}
