/**
 * This class control level element
 */

export class Level {

  constructor(element, settings) {
    this.element = element;
    this.settings = settings;
  }

  getLevelCoordinates() {
    return this.element.getBoundingClientRect();
  }

  levelArea() {
    const width = this.getLevelCoordinates().right - this.getLevelCoordinates().left;
    const height = this.getLevelCoordinates().bottom - this.getLevelCoordinates().top;

    return [width, height];
  }

  /**
   * This function create level pallete like chess board
   * Because handwrite in HTML it's very long
   **/
  createLevelPalette() {
    const levelPalette = document.querySelector('.level__palette');
    const levelPalletteTable = document.createElement('table');

    levelPalletteTable.className = 'level__palette-table';

    for (let i = 0; i < 9; i++) {
      const levelPaletteTR = document.createElement('tr');

      for (let j = 0; j < 16; j++) {
        const levelPaletteTD = document.createElement('td');

        if (i % 2 === j % 2) {
          levelPaletteTD.className = 'level__palette-element level__palette-element--light';
        } else {
          levelPaletteTD.className = 'level__palette-element level__palette-element--dark';
        }

        levelPaletteTR.appendChild(levelPaletteTD);
      }

      levelPalletteTable.appendChild(levelPaletteTR);
    }

    levelPalette.appendChild(levelPalletteTable);
  }

  levelArrayOfCoordinates() {
    const [levelSizeWidth, levelSizeHeight] = this.levelArea();
    const arrayOfCoordinates = [];
    for (let i = 0; i < levelSizeHeight; i += this.settings.componentSize()) {
      for (let j = 0; j < levelSizeWidth; j += this.settings.componentSize()) {
        arrayOfCoordinates.push([i, j]);
      }
    }

    return arrayOfCoordinates;
  }
}
