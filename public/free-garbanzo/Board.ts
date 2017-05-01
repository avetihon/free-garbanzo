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

    public createBoard(): void {
        this.element = document.createElement('div');
    }

    public configureBoard(): void {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        this.element.classList.add(Board.CSS);
        this.element.classList.add(Board.STYLE);
        this.element.classList.add(this.identifier);
    }

    public displayBoard(): void {
        this.rootElement.appendChild(this.element);
    }

    public create() {
        this.createBoard();
        this.configureBoard();
        this.displayBoard();
    }
}

export default Board;
