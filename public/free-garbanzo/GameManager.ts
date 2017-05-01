import {IGameManager} from "./models/IGameManager";
import {IConfiguration} from "./models/IConfiguration";
import PositionManager from "./PositionManager";
import Snake from "./Snake";
import {ISnake} from "./models/ISnake";
import CoordinatesMoveList from "./config/CoordinatesMoveList";
import GameObjectList from "./GameObjectList";
import {IGameObjectList} from "./models/IGameObjectList";
import Engine from "./Engine";
import ControlManager from "./ControlManager";
import Level from "./Level";


class GameManager implements IGameManager {
    public configuration: IConfiguration;
    public positionManager: PositionManager;
    public gameObjectList: GameObjectList;

    public constructor(configuration: IConfiguration) {
        this.configuration = configuration;
    }

    public createPositionManager(): this {
        this.positionManager = new PositionManager(this.configuration);

        return this;
    }

    public createGameObjectList(): this {
        this.gameObjectList = new GameObjectList();

        return this;
    }

    public createLevel(): this {
        var level: Level = new Level(this.configuration, this.positionManager, this.gameObjectList);
        level.create();

        return this;
    }

    public createEngine(): this {

        var engine: Engine = new Engine(this.configuration, this.gameObjectList);
        engine.create();

        var controlManager: ControlManager = new ControlManager(engine);
        controlManager.create();
        return this;
    }
}

export default GameManager;
