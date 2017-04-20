import {IFruit} from "./models/IFruit";
import {IGameObject} from "./models/IGameObject";
import {ICoordinates} from "./models/ICoordinates";

class Fruit implements IGameObject, IFruit {
    public position: ICoordinates;
    public scores: number;

    public constructor() {}
}

export default Fruit;