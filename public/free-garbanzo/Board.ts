import {IBoard} from "./models/IBoard";
import {IConfiguration} from "./models/IConfiguration";

class Board implements IBoard {
    public static readonly CSS: string = 'location';
    public static readonly STYLE: string = 'location--style';
    public width: number;
    public height: number;
    public identifier: string;
    public element: HTMLElement;
    public rootElement: Element;

    public constructor(configuration: IConfiguration) {
        this.width = configuration.boardWidth;
        this.height = configuration.boardHeight;
        this.identifier = configuration.boardIdentifier;
        this.rootElement = configuration.rootElement;
    }

    public createElement(): void {
        this.element = document.createElement('div');
    }

    public configure(): void {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        this.element.classList.add(Board.CSS);
        this.element.classList.add(Board.STYLE);
        this.element.classList.add(this.identifier);
    }

    public display(): void {
        this.rootElement.appendChild(this.element);
    }

    public clear(): void {
        while (this.rootElement.firstChild) {
            this.rootElement.removeChild(this.rootElement.firstChild);
        }
    }

    public create() {
        this.createElement();
        this.configure();
        this.display();
    }
}

export default Board;
