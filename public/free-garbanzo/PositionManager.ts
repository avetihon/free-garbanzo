import Snake from "./Snake";
import {IConfiguration} from "./models/IConfiguration";
import {ICoordinates} from "./models/ICoordinates";
import DirectionList from "./config/DirectionList";
import getRandomValue from "./utils/getRandomValue";

class PositionManager {
    public configuration: IConfiguration;
    public virtualBoard: number[][];
    public directionList: string[];
    public snakeNumber: number;

    public constructor(configuration: IConfiguration) {
        this.configuration = configuration;
        this.directionList = [DirectionList.DOWN, DirectionList.RIGHT, DirectionList.UP,  DirectionList.LEFT];
        this.snakeNumber = 0;
        this.generateVirtualBoard();
    }

    public setSnakePosition(snake: Snake): this {
        var snakeNumber: number = snake.getSnakeIdNumber();
        var coordinatesMoveList: any = snake.coordinatesMoveList;
        var {startCoordinates, direction} = this.getSnakePosition(snakeNumber);
        var coordinatesNext: ICoordinates = coordinatesMoveList[direction];

        var i: number;
        var len: number;
        for (i = 0, len = snake.size; i < len; i += 1) {
            snake.elements.push({
                x: startCoordinates.x + (i * coordinatesNext.x),
                y: startCoordinates.y + (i * coordinatesNext.y)
            });
        }

        snake.direction = direction;
        return this;
    }

    public generateVirtualBoard(): void {
        this.virtualBoard = [];
        for (let column = 0, len = this.configuration.boardHeight / this.configuration.blockSize; column < len; column += 1) {
            this.virtualBoard[column] = [];
            for (let row = 0, len = this.configuration.boardWidth / this.configuration.blockSize; row < len; row += 1) {
                this.virtualBoard[column][row] = 0;
            }
        }
    }

    public getSnakePosition(id: number): {startCoordinates: ICoordinates, direction: string} {
        var startCoordinates: ICoordinates;
        var direction: string;

        switch (id) {
            case 1: {
                direction = this.directionList[getRandomValue(0, 1)];
                startCoordinates = {
                    x: this.configuration.blockSize,
                    y: this.configuration.blockSize
                };
                break;
            }
            case 2: {
                direction = this.directionList[getRandomValue(2, 3)];
                startCoordinates = {
                    x: (this.configuration.boardWidth - 1) * this.configuration.blockSize,
                    y: (this.configuration.boardHeight - 1) * this.configuration.blockSize
                };
                break;
            }
        }

        return {
            startCoordinates,
            direction
        };
    }

    public setGameObjectPosition(): void {

    }
}

export default PositionManager;
