import Game from "./free-garbanzo/Game";

class Main {
    public static main(Game: any): void {
        var game: Game = Game.getInstance();
        game.initMenu();
    }
}

Main.main(Game);