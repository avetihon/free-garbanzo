import { emmiter } from './event-emmiter.js';

export class Interface {

  constructor(settings) {
    this.settings = settings;
    emmiter.addListener('updateScores', () => { this.updateScores(); });
  }

  updateScores() {
    const element = document.querySelector('.game__scores');
    let score = parseInt(element.innerText, 10);
    score += this.settings.scores;
    element.innerText = score;
  }
}
