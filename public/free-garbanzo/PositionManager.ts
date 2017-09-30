import Snake from "./game-objects/Snake";
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
                    x: (this.configuration.boardWidth - this.configuration.blockSize * 2),
                    y: (this.configuration.boardHeight - this.configuration.blockSize * 2)
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
