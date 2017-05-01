import {IGameObjectList} from "./models/IGameObjectList";
import {IGameObject} from "./models/IGameObject";
import {ISnake} from "./models/ISnake";

class GameObjectList implements IGameObjectList {
    public list: {
        [objectId: string]: IGameObject | ISnake
    };

    public constructor() {
        this.list = {};
    }

    public add(object: IGameObject | ISnake): void {
        this.list[object.id] = object;
    }

    public removeBy(key: string): void {
        delete this.list[key];
    }

    public getList(): any {
        return this.list;
    }
}

export default GameObjectList;
