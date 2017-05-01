import Board from './Board';
import Snake from "./Snake";
import Menu from "./Menu";
import ControlManager from "./ControlManager";
import Engine from "./Engine";
import GameObjectList from "./GameObjectList";
import getShortUID from "./utils/getShortUID";
import Level from "./Level";
import PositionManager from "./PositionManager";
import {IConfiguration} from "./models/IConfiguration";
import CoordinatesMoveList from "./config/CoordinatesMoveList";
import {IGameManager} from "./models/IGameManager";

import GameManager from "./GameManager";


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
        var configuration: IConfiguration = {
            blockSize: 10,
            boardWidth: 100,
            boardHeight: 100,
            playersNumber: 2,
            snakeDefaultSize: 3,
            boardIdentifier: getShortUID('board'),
            rootElement: document.querySelector('.game'),
            transparentWall: false
        };

        var gameManager: IGameManager = new GameManager(configuration);

        gameManager
            .createPositionManager()
            .createGameObjectList()
            .createLevel()
            .createEngine();



        // var coordinatesMoveList = new CoordinatesMoveList(configuration).getCoordinatesMoveList();
        //
        //
        // var board = new Board(configuration);
        // board.create();
        //
        // var snake = new Snake(1, configuration);
        // snake.coordinatesMoveList = coordinatesMoveList;
        //
        // var positionManager: PositionManager = new PositionManager(configuration);
        // positionManager.setSnakePosition(snake);
        //
        // var gameObjectList: GameObjectList = new GameObjectList();
        // gameObjectList.add(snake);
        //
        // var engine: Engine = new Engine(configuration, gameObjectList);
        // engine.create();
        //
        // var controlManager: ControlManager = new ControlManager(engine);
        // controlManager.create();
    }
}

export default Game;
