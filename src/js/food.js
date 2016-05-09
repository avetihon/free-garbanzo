/**
 * This class control food element
 */

export class Food {

  constructor(levelElement) {
    this.levelElement = levelElement;
  }

  /**
   * Initialize new food
   * Create new div, add to it the class, make append to level
   * And set random position
   */
  initNewFood(foodXCoord, foodYCoord) {
    const foodElement = document.createElement('div');
    foodElement.className = 'level__food';
    this.food = foodElement;
    this.levelElement.appendChild(foodElement);
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
   * Setup new food position using Level func, that get level area
   */
  setToFoodNewPosition(foodXCoord, foodYCoord) {
    this.food.style.display = 'none';
    this.food.style.left = foodXCoord;
    this.food.style.top = foodYCoord;
    this.food.style.display = 'block';
  }

  getFoodPosition() {
    const foodXCoord = parseInt(this.food.style.left, 10);
    const foodYCoord = parseInt(this.food.style.top, 10);

    return {
      foodXCoord,
      foodYCoord,
    };
  }
}
