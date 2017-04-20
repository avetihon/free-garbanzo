import VirtualLocation from "./VirtualLocation";
import {ISnake} from "./models/ISnake";
import {IGameObject} from "./models/IGameObject";

class PositionManager<T> {
    public virtualLocation: VirtualLocation;
    public constructor() {
        this.virtualLocation = new VirtualLocation;
    }

    public setPosition(gameObject: ISnake | IGameObject): void {
        switch (gameObject ) {
            case '': {
                break;
            }
        }
    }

    public setSnakePosition(): void {

    }

    public setGameObjectPosition(): void {

    }
}

export default PositionManager;