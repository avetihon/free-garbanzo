import {IGameObject} from "./models/IGameObject";
import getShortUID from "./utils/getShortUID";

abstract class GameObject implements IGameObject {
    public id: string;
    public constructor(prefix: string) {
        this.id = getShortUID(prefix);
    }
}

export default GameObject;
