export const titleModule = (() => {
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
