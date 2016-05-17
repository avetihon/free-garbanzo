export class Settings {

  static componentSize() {
    return 50;
  }

  static levelSize() {
    const levelSizeByComponent = [16, 9];

    return levelSizeByComponent;
  }

  static controls() {
    const keys = {
      W: 87,
      S: 83,
      A: 65,
      D: 68,
      Space: 100,
    };

    return keys;
  }
}


export const Setting = {
  scores: 50,
};
