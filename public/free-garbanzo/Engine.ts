import ControlList from "./config/ControlList";
import {IConfiguration} from "./models/IConfiguration";
import DirectionList from "./config/DirectionList";
import GameStateList from "./config/GameStateList";
import {ISnake} from "./models/ISnake";
import Snake from "./game-objects/Snake";
import PlayerList from "./config/PlayerList";
import {IGameObjectList} from "./models/IGameObjectList";

class Engine {
    public configuration: IConfiguration;
    public requestAnimationId: number;
    public gameState: GameStateList;

    /*@TODO Refactoring */
    public fps: number = 10;
    public direction: string;
    public gameObjectList: any;
    public player: number;
    public constructor(configuration: IConfiguration, gameObjectList: IGameObjectList) {
        this.configuration = configuration;
        this.gameObjectList = gameObjectList.getList();
    }

    /*@TODO Refactoring */
    public startAnimation(): void {
        var then: number = performance.now();
        var interval: number = 1000 / this.fps;
        var tolerance: number = 0.1;

        var animationLoop = (now: number): void => {
            this.requestAnimationId = requestAnimationFrame(animationLoop);
            var delta: number = now - then;

            if (delta >= interval - tolerance) {
                then = now - (delta % interval);
                this.snakeMovement();
            }
        };

        this.requestAnimationId = requestAnimationFrame(animationLoop);
    }

    public snakeMovement(): void {
        // както получаем змейку ???

        var i: number;
        var len: number;
        for (i = 1, len = this.configuration.playersNumber; i <= len; i += 1) {
            var snake: ISnake = this.gameObjectList[Snake.getSnakeIdBy(i)];
            snake.nextMove();
        }
    }

    public pause(): void {
        cancelAnimationFrame(this.requestAnimationId);
    }

    public setNewCoordinates(direction: string, player: number): void {
        /* It's not bad ? */
        this.direction = direction;
        this.player = player;
    }

    // public isPossibleMovement(snakeDirection: string): boolean {
    //     if (snakeDirection === DirectionList.UP && this.direction !== DirectionList.DOWN
    //         || snakeDirection === DirectionList.DOWN && this.direction !== DirectionList.UP
    //         || snakeDirection === DirectionList.LEFT && this.direction !== DirectionList.RIGHT
    //         || snakeDirection === DirectionList.RIGHT && this.direction !== DirectionList.LEFT) {
    //         return true;
    //     }
    //     return false;
    // }

    public setDirection(keyCode: number): void {
        switch (keyCode) {
            case ControlList.W: {
                this.setNewCoordinates(DirectionList.UP, PlayerList.PLAYER_ONE);
                break;
            }
            case ControlList.S: {
                this.setNewCoordinates(DirectionList.DOWN, PlayerList.PLAYER_ONE);
                break;
            }
            case ControlList.A: {
                this.setNewCoordinates(DirectionList.LEFT, PlayerList.PLAYER_ONE);
                break;
            }
            case ControlList.D: {
                this.setNewCoordinates(DirectionList.RIGHT, PlayerList.PLAYER_ONE);
                break;
            }
            case ControlList.SPACE: {
                this.pause();
                break;
            }
            default: {
                // nothing
            }
        }
    }

    public endGame(): void {
        this.pause();
    }

    public create(): void {
        this.startAnimation();
    }
}

export default Engine;
