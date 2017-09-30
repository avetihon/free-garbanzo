import {IConfiguration} from "./models/IConfiguration";
import {IGameObjectList} from "./models/IGameObjectList";
import GameObjectList from "./GameObjectList";
import {IBoard} from "./models/IBoard";
import Board from "./Board";
import {ISnake} from "./models/ISnake";
import Snake from "./game-objects/Snake";
import PositionManager from "./PositionManager";
import {ICoordinates} from "./models/ICoordinates";


class Level {
    public configuration: IConfiguration;
    public positionManager: PositionManager;
    public rootElement: Element;

    public board: IBoard;
    public gameObjectList: IGameObjectList;
    public constructor(configuration: IConfiguration, positionManager: PositionManager, gameObjectList: IGameObjectList) {
        this.configuration = configuration;
        this.positionManager = positionManager;

        this.rootElement = configuration.rootElement;
        this.gameObjectList = gameObjectList;
    }

    public nextLevel(): void {

    }

    public createBoard(): void {
        this.board = new Board(this.configuration);
        this.board.create();
    }

    public createSnake(): void {
        var snake: ISnake;

        var i: number;
        var len: number;
        for (i = 1, len = this.configuration.playersNumber; i <= len; i += 1) {
            var {startCoordinates, direction} = this.positionManager.getSnakePosition(i);
            snake = new Snake(i, this.configuration);
            snake.setStartPosition(startCoordinates, direction);
            this.gameObjectList.add(snake);
        }
    }

    public createGameObjects(): void {
        var i: number;
        var len: number;
        var gameObject: any;
        var gameObjectKey: string;
        var gameObjectKeys: string[] = Object.keys(this.gameObjectList.getList());
        for (i = 0, len = gameObjectKeys.length; i < len; i += 1) {
            gameObjectKey = gameObjectKeys[i];
            gameObject = this.gameObjectList.getList()[gameObjectKey];
            gameObject.create();
        }
    }

    public create(): void {
        this.createBoard();
        this.createSnake();
        this.createGameObjects();
    }

    public clear(): void {
        this.gameObjectList.clear();
        this.virtualBoard.clear();
        this.board.clear();
    }
}

export default Level;
