const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 97;
const KEY_D = 100;

export class Snake {
  constructor(element, positionX, positionY) {
    this.element = element;
    this.element.style.top = `${positionX}px`;
    this.element.style.left = `${positionY}px`;
  }

  moveLeft() {
    this.element.style.left = '110px';
  }

  moveRight() {
    this.element.style.left = '0px';
  }

  contolsKeyboard(event) {
    const key = event.keyCode || event.which;
    if (key === KEY_A) {
      this.moveLeft();
    } else if (key === KEY_D) {
      this.moveRight();
    }
  }
}

// export default 'Bears!';
