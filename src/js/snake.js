/**
 * This class control snake element
 */

export class Snake {

  constructor(settings) {
    this.settings = settings;
  }

  initNewSnake() {
    // create new div with some attr

    const snakeElement = document.createElement('div');
    const level = document.querySelector('.level');
    snakeElement.className = 'snake__part snake__part--head';
    snakeElement.style.top = '50px';
    snakeElement.style.left = '150px';

    // append a snake to the level
    level.appendChild(snakeElement);

    // create reference on current snake element
    this.snake = snakeElement;

    // init remaining snake body parts
    this.initSnakeBody(3);
  }

  // get snake element
  get snake() {
    return this.element;
  }

  // set snake element
  set snake(element) {
    this.element = element;
  }

  // Set reference to snake tail coordinates px
  set snakeTail(tail) {
    this.tail = tail;
  }

  // Get reference to snake tail coordinates px
  get snakeTail() {
    return this.tail;
  }

  // Get reference to snake head coordinates
  get snakeHead() {
    const headXCoord = parseInt(this.snake.style.left, 10);
    const headYCoord = parseInt(this.snake.style.top, 10);

    return {
      x: headXCoord,
      y: headYCoord,
    };
  }

  /**
   * Universal function that add new part to snake body
   */
  addNewSnakePart(coordX, coordY, element) {
    const snakePart = document.createElement('div');
    snakePart.className = 'snake__part';
    snakePart.style.top = `${coordY}px`;
    snakePart.style.left = `${coordX}px`;
    this.snake.parentNode.insertBefore(snakePart, element);
  }

  /**
   * Init snake body part
   **/
  initSnakeBody(partCount) {
    let i = partCount;
    const snakeXCoord = this.snakeHead.x;
    const snakeYCoord = this.snakeHead.y;

    while (i > 0) {
      const newHeadXCoord = snakeXCoord - (i * this.settings.componentSize);
      this.addNewSnakePart(newHeadXCoord, snakeYCoord, this.snake);

      i--;
    }
  }

  /**
   * Add to snake new tail when snake eat food
   **/
  addToSnakeNewTail() {
    this.addNewSnakePart(this.snakeTail.x, this.snakeTail.y, this.snake.parentNode.firstChild);
  }

  /**
   * Function return all current snake coordinates
   */

  currentSnakePartsCoordinates() {
    const snakeParts = document.querySelectorAll('.snake__part');
    const arrayOfCoordinates = [];

    for (const snake of Array.from(snakeParts)) {
      arrayOfCoordinates.push({
        x: parseInt(snake.style.left, 10),
        y: parseInt(snake.style.top, 10),
      });
    }

    return arrayOfCoordinates;
  }

  /**
   * Function that controll moves of all the snake parts
   */
  moveBody(posX, posY) {
    const snakeParts = document.querySelectorAll('.snake__part');
    const arrayOfCoordinates = this.currentSnakePartsCoordinates();

    arrayOfCoordinates.push({ x: posX, y: posY });
    this.snakeTail = arrayOfCoordinates.shift();

    // change the old coordinates to the new
    for (let i = 0; i < snakeParts.length; i++) {
      snakeParts[i].style.left = `${arrayOfCoordinates[i].x}px`;
      snakeParts[i].style.top = `${arrayOfCoordinates[i].y}px`;
    }
  }
}
