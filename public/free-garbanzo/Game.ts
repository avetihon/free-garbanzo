import Configuration from "./config/Configuration";
import Location from './Location';
import Snake from "./Snake";
import Menu from "./Menu";
import ControlHandler from "./ControlHandler";
import Engine from "./Engine";
import GameObjectList from "./GameObjectList";
import getShortUID from "./utils/getShortUID";
import Level from "./Level";


class Game {
    private static __instance: Game;
    private constructor() {}

    public static getInstance(): Game {
        if (!Game.__instance) {
            Game.__instance = new Game();
        }
        return Game.__instance;
    }

    public initMenu(): void {
        var menu: Menu = new Menu();
        menu.create();
    }

    public startNewGame(): void {
        var configuration = new Configuration();
        configuration.locationWidth = 100;
        configuration.locationHeight = 100;
        configuration.playersNumber = 1;
        configuration.snakeDefaultSize = 3;
        configuration.locationIdentifier = getShortUID();
        configuration.rootElement = document.querySelector('.game');

        var level: Level = new Level(configuration);
        level.create();

        var location = new Location(configuration);
        location.create();

        var snake = new Snake(configuration);
        snake.create();

        var gameObjectList: GameObjectList = new GameObjectList();
        gameObjectList.add(snake);

        var engine: Engine = new Engine(configuration, gameObjectList);
        engine.create();

        var controlHandler: ControlHandler = new ControlHandler(engine);
        controlHandler.create();
    }
}

export default Game;
