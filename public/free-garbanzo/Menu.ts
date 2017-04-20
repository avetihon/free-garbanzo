import Game from "./Game";

class Menu {
    public constructor() {}

    public newGameHandler(): void {
        var game: Game = Game.getInstance();
        game.startNewGame();
    }

    public createEventListeners(): void {
        document
            .querySelector('.js-menu--new-game')
            .addEventListener('click', this.newGameHandler, false);
    }

    public create(): void {
        this.createEventListeners();
    }
}

export default Menu;