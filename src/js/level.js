/**
 * This class control level element
 */

export class Level {

  constructor(element) {
    this.element = element;
  }

  getLevel() {
    return this.element;
  }

  getLevelCoordinates() {
    return this.element.getBoundingClientRect();
  }

  levelArea() {
    const width = this.getLevelCoordinates().right - this.getLevelCoordinates().left;
    const height = this.getLevelCoordinates().bottom - this.getLevelCoordinates().top;

    return {
      width,
      height,
    };
  }
}
