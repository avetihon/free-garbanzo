import {ILocation} from "./models/ILocation";
import {IConfiguration} from "./models/IConfiguration";

class Location implements ILocation {
    public static readonly CSS: string = 'location';
    public static readonly STYLE: string = 'location--style';
    public width: number;
    public height: number;
    public identifier: string;
    public element: HTMLElement;
    public rootElement: Element;

    public constructor(configuration: IConfiguration) {
        this.width = configuration.locationWidth;
        this.height = configuration.locationHeight;
        this.identifier = configuration.locationIdentifier;
        this.rootElement = configuration.rootElement;
    }

    public setupLocation(): void {
        this.element = document.createElement('div');
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        this.element.classList.add(Location.CSS);
        this.element.classList.add(Location.STYLE);
        this.element.classList.add(this.identifier);
    }

    public appendToRootElement(): void {
        this.rootElement.appendChild(this.element);
    }

    public create() {
        this.setupLocation();
        this.appendToRootElement();
    }
}

export default Location;