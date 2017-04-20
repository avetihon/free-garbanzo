import {IConfiguration} from "../models/IConfiguration";

class Configuration implements IConfiguration {
    public blockSize: number;
    public locationWidth: number;
    public locationHeight: number;
    public locationIdentifier: string;
    public playersNumber: number;
    public snakeDefaultSize: number;
    public transparentWall: boolean;
    public rootElement: Element;

    public constructor() {}
}

export default Configuration;