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

  init() {
    // setInterval(() => {
    //   this.moveLeft();
    // }, 500);
  }

  moveTop() {

  }

  moveBottom() {

  }

  moveLeft(context) {
    const self = context;
    const position = parseInt(self.element.style.left, 10) - 10;
    self.element.style.left = `${position}px`;
  }

  moveRight(context) {
    const self = context;
    const position = parseInt(self.element.style.left, 10) + 10;
    self.element.style.left = `${position}px`;
  }

  setInterval(interval) {
    this.interval = interval;
  }

  getInterval() {
    return this.interval;
  }

  moveTo(direction, context) {
    const interval = this.getInterval();
    let newInterval;
    if (interval) {
      clearInterval(interval);
      newInterval = setInterval(() => {
        direction(context);
      }, 500);
      this.setInterval(newInterval);
    } else {
      newInterval = setInterval(() => {
        direction(context);
      }, 500);
      this.setInterval(newInterval);
    }
  }

  contolsKeyboard(event) {
    const key = event.keyCode || event.which;

    if (key === KEY_A) {
      this.moveTo(this.moveLeft, this);
    } else if (key === KEY_D) {
      this.moveTo(this.moveRight, this);
    }
  }
}

// export default 'Bears!';
