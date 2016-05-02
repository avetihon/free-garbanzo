import { test } from './level.js';

// const setupModule = (() => {
//   const snakePartSize = 10;
//   const levelWidth = 300;
//   const levelHeight = 200;
// })();

const changeTitleModule = (() => {
  const currentTitle = document.title;

  const event = () => {
    /* little funnies */
    window.addEventListener('blur', () => document.title = 'We miss you...');
    window.addEventListener('focus', () => document.title = currentTitle);
  };

  const init = () => {
    event();
  };

  return {
    init,
  };
})();


changeTitleModule.init();
test.initNewLevel();
