/**
 * This class control food element
 */

export class Food {

  /**
   * Initialize new food
   * Create new div, add a class to new element, appending to level element
   * And set random position
   */
  initNewFood(foodXCoord, foodYCoord) {
    const foodElement = document.createElement('div');
    const level = document.querySelector('.level');

    foodElement.className = 'level__food';
    this.food = foodElement;
    level.appendChild(foodElement);
    this.setToFoodNewPosition(foodXCoord, foodYCoord);
  }

  // get food element
  get food() {
    return this.element;
  }

  // set food element
  set food(element) {
    this.element = element;
  }

  /**
   * Setup new food position
   */
  setToFoodNewPosition(foodXCoord, foodYCoord) {
    this.food.style.display = 'none';
    this.food.style.left = `${foodXCoord}px`;
    this.food.style.top = `${foodYCoord}px`;
    this.food.style.display = 'block';
  }

  getFoodPosition() {
    const foodXCoord = parseInt(this.food.style.left, 10);
    const foodYCoord = parseInt(this.food.style.top, 10);

    return {
      x: foodXCoord,
      y: foodYCoord,
    };
  }
}
