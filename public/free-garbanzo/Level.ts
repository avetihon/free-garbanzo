import {IConfiguration} from "./models/IConfiguration";

class Level {
    public winCondition: number;
    public rootElement: Element;
    public constructor(configuration: IConfiguration) {
        this.rootElement = configuration.rootElement;
    }

    public nextLevel(): void {

    }

    public removeLocation(): void {
        while (this.rootElement.firstChild) {
            this.rootElement.removeChild(this.rootElement.firstChild);
        }
    }

    public create(): void {

    }
}

export default Level;