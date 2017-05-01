import {IConfiguration} from "./models/IConfiguration";
import {ISnake} from "./models/ISnake";
import Snake from "./Snake";

class Level {
    public winCondition: number;
    public rootElement: Element;
    public playersNumber: number;
    public configuration: IConfiguration;
    public gameObjectList: any;
    public coordinatesMoveList: any;
    public constructor(configuration: IConfiguration, gameObjectList: any, coordinatesMoveList: any) {
        this.configuration = configuration;
        this.playersNumber = configuration.playersNumber;
        this.rootElement = configuration.rootElement;
        this.gameObjectList = gameObjectList;
        this.coordinatesMoveList = coordinatesMoveList;
    }

    public nextLevel(): void {

    }

    public removeLocation(): void {
        while (this.rootElement.firstChild) {
            this.rootElement.removeChild(this.rootElement.firstChild);
        }
    }

    public createSnake(): this {
        var snake: ISnake;
        var playerNumber = this.playersNumber;
        var i: number;
        for (i = 0; i < playerNumber; i += 1) {
            snake = new Snake(1, this.configuration);
            snake.setCoordinatesMoveList(this.coordinatesMoveList);

            this.gameObjectList.add(snake);
        }
        return this;
    }

    public createBoard(): void {

    }

    public create(): void {

    }
}

export default Level;
