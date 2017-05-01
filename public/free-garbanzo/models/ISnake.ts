import {ICoordinates} from "./ICoordinates";

export interface ISnake {
    id: string;
    size: number;
    nextMove(direction?: string): void;
    setCoordinatesMoveList(coordinatesMoveList: any): any;
    setStartPosition(startCoordinates: ICoordinates, direction: string): void;
}
