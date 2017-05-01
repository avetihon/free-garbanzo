import {IGameManager} from "./models/IGameManager";
import {IConfiguration} from "./models/IConfiguration";
import PositionManager from "./PositionManager";
import Snake from "./Snake";
import {ISnake} from "./models/ISnake";
import CoordinatesMoveList from "./config/CoordinatesMoveList";
import GameObjectList from "./GameObjectList";


class GameManager implements IGameManager {
    public configuration: IConfiguration;
    public positionManager: PositionManager;
    public gameObjectList: any;
    public coordinatesMoveList: any;
    public constructor(configuration: IConfiguration) {
        this.configuration = configuration;
    }

    public createCoordinatesMoveList(): this {
        this.coordinatesMoveList = new CoordinatesMoveList(this.configuration).getCoordinatesMoveList();

        return this;
    }

    public createPositionManager(): this {
        this.positionManager = new PositionManager(this.configuration);

        return this;
    }

    public createGameObjectList(): this {
        this.gameObjectList = new GameObjectList();

        return this;
    }

    public createSnake(): this {
        var snake: ISnake;
        var playerNumber = this.configuration.playersNumber;
        var i: number;
        for (i = 0; i < playerNumber; i += 1) {
            snake = new Snake(1, this.configuration);
            snake.setCoordinatesMoveList(this.coordinatesMoveList);

            this.gameObjectList.add(snake);
        }
        return this;
    }

    public createLevel(): this {

        return this;
    }

    public createEngine(): this {

        return this;
    }
}

export default GameManager;
