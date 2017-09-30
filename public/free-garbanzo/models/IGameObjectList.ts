import {ISnake} from "./ISnake";
import {IGameObject} from "./IGameObject";

export interface IGameObjectList {
    list: {
        [objectId: string]: IGameObject | ISnake;
    }
    add(object: IGameObject | ISnake): void;
    removeBy(key: string): void;
    clear(): void;
    getList(): any;
}
