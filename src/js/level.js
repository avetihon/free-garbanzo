import { Snake } from 'snake';

const level = document.querySelector('.level');
const levelCoordinates = level.getBoundingClientRect();
const levelWidth = levelCoordinates.right - levelCoordinates.left;
const levelHeight = levelCoordinates.bottom - levelCoordinates.top;

const snake = document.createElement('div');
snake.className = 'snake';
snake.style.top = '20px';
snake.style.left = '10px';

level.appendChild(snake);

// import bear from 'snake.js';
// console.log(bear);
