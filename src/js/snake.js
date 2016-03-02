export class Snake {
  constructor(element, positionX, positionY) {
    this.element.style.top = `${positionX}px`;
    this.element.style.left = `${positionY}px`;
  }

  moveLeft() {
    this.element.style.left = - 10;
  }

  moveRight() {
    this.element.style.left = + 10;
  }
}

// export default 'Bears!';
