/**
 * This class control level element
 */

export class Level {

  constructor(settings) {
    this.settings = settings;
  }

  levelArea() {
    const width = this.settings.levelSizeByComponent.x * this.settings.componentSize;
    const height = this.settings.levelSizeByComponent.y * this.settings.componentSize;

    return {
      width,
      height,
    };
  }

  /**
   * This function create level pallete like chess board
   * Because handwrite in HTML it's very long
   **/
  createLevelPalette() {
    const levelPalette = document.querySelector('.level__palette');
    const levelPalletteTable = document.createElement('table');

    levelPalletteTable.className = 'level__palette-table';

    for (let i = 0; i < this.settings.levelSizeByComponent.y; i++) {
      const levelPaletteTR = document.createElement('tr');

      for (let j = 0; j < this.settings.levelSizeByComponent.x; j++) {
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

  levelCoordinates() {
    const arrayOfCoordinates = [];
    for (let i = 0; i < this.settings.levelSizeByComponent.y; i++) {
      for (let j = 0; j < this.settings.levelSizeByComponent.x; j++) {
        arrayOfCoordinates.push({
          x: j * this.settings.componentSize,
          y: i * this.settings.componentSize,
        });
      }
    }

    return arrayOfCoordinates;
  }
}
