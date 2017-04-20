import ControlList from "./config/ControlList";
import {ICoordinates} from "./models/ICoordinates";
import {IConfiguration} from "./models/IConfiguration";
import DirectionList from "./config/DirectionList";
import GameObjectList from "./GameObjectList";

class Engine {
    public configuration: IConfiguration;
    public nextMoveCoordinates: ICoordinates;
    public requestAnimationId: number;
    public isPaused: boolean;

    /*@TODO Refactoring */
    public fps: number = 10;
    public snakeDirection: string;
    public gameObjectList: GameObjectList;
    public constructor(configuration: IConfiguration, gameObjectList: GameObjectList) {
        this.configuration = configuration;
        this.nextMoveCoordinates = {x: 10, y: 0};
        this.snakeDirection = DirectionList.RIGHT;
        this.gameObjectList = gameObjectList;

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
        var snake = this.gameObjectList.list[0].elements[0];
        var currentX: number = Number.parseInt(snake.style.left);
        var currentY: number = Number.parseInt(snake.style.top);
        var newSnakeXPosition: number = currentX + this.nextMoveCoordinates.x;
        var newSnakeYPosition: number = currentY + this.nextMoveCoordinates.y;

        this.checkBoundsOverstep(newSnakeXPosition, newSnakeYPosition);
        // this.checkGameObjectCoincidence(newSnakeXPosition, newSnakeYPosition);

        // var snakeParts = document.querySelectorAll('.js-snake');
        //
        // var head: HTMLElement = <HTMLElement>snakeParts[0];
        //
        // var i: number;
        // var len: number;
        // var snakePart: HTMLElement;
        // for (i = 0, len = snakeParts.length; i < len; i += 1) {
        //     snakePart =
        //     var currentX: number = Number.parseInt(snakePart.style.left);
        //     var currentY: number = Number.parseInt(snakePart.style.top);
        //
        //     snakePart.style.left = currentX + coordinates.x + 'px';
        //     snakePart.style.top =  currentY + coordinates.y + 'px';
        // }

        snake.style.left = newSnakeXPosition + 'px';
        snake.style.top =  newSnakeYPosition + 'px';
    }

    public pause(): void {
        cancelAnimationFrame(this.requestAnimationId);
    }

    public setNextMoveCoordinates(x: number, y: number, direction: string): void {
        /* It's not bad ? */
        if (this.snakeDirection === DirectionList.UP && direction !== DirectionList.DOWN
            || this.snakeDirection === DirectionList.DOWN && direction !== DirectionList.UP
            || this.snakeDirection === DirectionList.LEFT && direction !== DirectionList.RIGHT
            || this.snakeDirection === DirectionList.RIGHT && direction !== DirectionList.LEFT) {
            this.nextMoveCoordinates.x = x;
            this.nextMoveCoordinates.y = y;
            this.snakeDirection = direction;
        }
    }

    public setDirection(keyCode: number): void {
        switch (keyCode) {
            case ControlList.W: {
                this.setNextMoveCoordinates(0, -10, DirectionList.UP);
                break;
            }
            case ControlList.S: {
                this.setNextMoveCoordinates(0, +10, DirectionList.DOWN);
                break;
            }
            case ControlList.A: {
                this.setNextMoveCoordinates(-10, 0, DirectionList.LEFT);
                break;
            }
            case ControlList.D: {
                this.setNextMoveCoordinates(+10, 0, DirectionList.RIGHT);
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

    public checkBoundsOverstep(x: number, y: number): void {
        if (x < 0
            || y < 0
            || x > this.configuration.locationWidth
            || y > this.configuration.locationHeight) {
            this.endGame();
        }
    }

    public endGame(): void {
        this.pause();
    }

    public create(): void {
        // this.startAnimation();
    }
}

export default Engine;