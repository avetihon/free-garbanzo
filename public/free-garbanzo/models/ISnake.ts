import {IFruit} from "./IFruit";

export interface ISnake {
    scores: number;
    eat(fruit: IFruit): void;
}