import { emmiter } from './event-emmiter.js';
import { Setting } from './settings.js';

export class Interface {

  constructor() {
    emmiter.addListener('updateScores', this.updateScores);
  }

  get scoreElement() {
    return this.element;
  }

  set scoreElement(element) {
    this.element = element;
  }

  updateScores() {
    this.scoreElement = 1;
    const element = document.querySelector('.game__scores');
    let score = parseInt(element.innerText, 10);
    score += Setting.scores;
    element.innerText = score;
  }
}
