(() => {
  'use strict';

  const currentTitle = document.title;

  /* little funnies */
  window.addEventListener('blur', () => document.title = 'We miss you...');
  window.addEventListener('focus', () => document.title = currentTitle);

  // const body = document.getElementsByTagName('body')[0];
  // const scene = document.createElement('section');

  // scene.className = 'scene';
  // body.appendChild(scene);
})();
