import {ISnake} from "./models/ISnake";
import {IFruit} from "./models/IFruit";
import {IConfiguration} from "./models/IConfiguration";

class Snake implements ISnake {
    public scores: number;
    public elements: HTMLElement[];
    public configuration: IConfiguration;

    public constructor(configuration: IConfiguration) {
        this.configuration = configuration;
    }

    public eat(fruit: IFruit): void {
        this.scores += fruit.scores;
    }

    public createSnakeBody(): void {
        this.elements = [];
        var i: number;
        var len: number;
        for (i = 0, len = this.configuration.snakeDefaultSize; i < len; i += 1) {

            var element: HTMLElement = document.createElement('div');
            var snakePart: string = (i === 0) ? 'snake--head' : 'snake--body';
            element.style.width = 10 + 'px';
            element.style.height = 10 + 'px';
            element.style.left = i * 10 + 'px';
            element.style.top = 10 + 'px';
            element.classList.add(snakePart);
            element.classList.add('snake--style');
            document.querySelector('.' + this.configuration.locationIdentifier).appendChild(element);

            this.elements.push(element);
        }


    }

    public addNewBodyPart(): void {
        // this.elements.push()
    }

    public create(): void {
        this.createSnakeBody();

    }
}

export default Snake;