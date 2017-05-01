import ControlList from "./config/ControlList";
import {IConfiguration} from "./models/IConfiguration";
import DirectionList from "./config/DirectionList";
import GameObjectList from "./GameObjectList";
import GameStateList from "./config/GameStateList";
import {ISnake} from "./models/ISnake";
import Snake from "./Snake";
import PlayerList from "./config/PlayerList";

class Engine {
    public configuration: IConfiguration;
    public requestAnimationId: number;
    public gameState: GameStateList;

    /*@TODO Refactoring */
    public fps: number = 10;
    public direction: string;
    public gameObjectList: any;
    public player: number;
    public constructor(configuration: IConfiguration, gameObjectList: GameObjectList) {
        this.configuration = configuration;
        this.gameObjectList = gameObjectList.getList();
        this.player = 1;
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

        var snake: ISnake = this.gameObjectList[Snake.getSnakeIdBy(this.player)];
        snake.nextMove();
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

    public createGameObjects(): void {
        var i: number;
        var len: number;
        var gameObject: any;
        var gameObjectKey: string;
        var gameObjectKeys: string[] = Object.keys(this.gameObjectList);
        for (i = 0, len = gameObjectKeys.length; i < len; i += 1) {
            gameObjectKey = gameObjectKeys[i];
            gameObject = this.gameObjectList[gameObjectKey];
            gameObject.create();
        }
    }

    public create(): void {
        this.createGameObjects();
        this.startAnimation();
    }
}

export default Engine;
