import {IConfiguration} from "../models/IConfiguration";
import DirectionList from "./DirectionList";

class CoordinatesMoveList {
    public configuration: IConfiguration;
    public constructor(configuration: IConfiguration) {
        this.configuration = configuration;
    }

    public getCoordinatesMoveList(): any {
        return {
            [DirectionList.UP]:    {x: 0, y: -this.configuration.blockSize},
            [DirectionList.DOWN]:  {x: 0, y: this.configuration.blockSize},
            [DirectionList.LEFT]:  {x: -this.configuration.blockSize, y: 0},
            [DirectionList.RIGHT]: {x: this.configuration.blockSize, y: 0}
        }
    }
}

export default CoordinatesMoveList;
