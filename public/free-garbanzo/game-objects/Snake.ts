import {ISnake} from "../models/ISnake";
import {ICoordinates} from "../models/ICoordinates";
import {IConfiguration} from "../models/IConfiguration";
import vectorList from "../config/VectorList";

class Snake implements ISnake {
    public static readonly PREFIX: string = 'snake';
    public id: string;
    public size: number;
    public direction: string;
    public elements: ICoordinates[];
    public elementsHTML: HTMLElement[];
    public configuration: IConfiguration;
    public vectorList: any;

    public constructor(player: number, configuration: IConfiguration) {
        this.id = Snake.PREFIX + player;
        this.size = configuration.snakeDefaultSize;
        this.configuration = configuration;
        this.elements = [];
        this.elementsHTML = [];
        this.vectorList = vectorList;
    }

    public static getSnakeIdBy(player: number) {
        return Snake.PREFIX + player;
    }

    public getSnakeHead(): ICoordinates {
        return this.elements[this.size - 1];
    }

    public setStartPosition(startCoordinates: ICoordinates, direction: string): void {
        var vector: ICoordinates = this.vectorList[direction];
        var i: number;
        var len: number;
        for (i = 0, len = this.size; i < len; i += 1) {
            this.elements.push({
                x: startCoordinates.x + (i * vector.x * this.configuration.blockSize),
                y: startCoordinates.y + (i * vector.y * this.configuration.blockSize)
            });
        }

        this.direction = direction;
    }

    public createSnakeBody(): void {

        //     var snakePart: string = (i === 0) ? 'snake--head' : 'snake--body';


        var i: number;
        for (i = 0; i < this.size; i += 1) {
            this.addNewBodyPart(this.elements[i]);
        }
    }

    public addNewBodyPart(coordinates: ICoordinates): void {
        var element: HTMLElement = document.createElement('div');
        element.style.width = this.configuration.blockSize + 'px';
        element.style.height = this.configuration.blockSize + 'px';
        element.style.left = coordinates.x + 'px';
        element.style.top = coordinates.y + 'px';
        element.classList.add('snake--body');
        element.classList.add('snake--style');

        document.querySelector(`.${this.configuration.boardIdentifier}`).appendChild(element);

        this.elementsHTML.push(element);
    }

    /* View part */

    public nextMove(direction: string = this.direction): void {
        this.direction = direction;
        var vector = this.vectorList[direction];
        var {x, y} = this.getSnakeHead();
        x = (x + vector.x) * this.configuration.blockSize;
        y = (y + vector.y) * this.configuration.blockSize;
        this.elements.shift();
        this.elements.push({x, y});

        this.render();
    }


    public render(): void {
        var element: ICoordinates;
        var elementHTML: HTMLElement;
        var i: number;

        for (i = 0; i < this.size; i += 1) {
            element = this.elements[i];
            elementHTML = this.elementsHTML[i];

            elementHTML.style.left = element.x + 'px';
            elementHTML.style.top = element.y + 'px';
        }
    }

    public create(): void {
        this.createSnakeBody();
    }
}

export default Snake;
