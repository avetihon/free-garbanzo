import Engine from "./Engine";

class ControlHandler {
    public engine: Engine;
    public constructor(engine: Engine) {
        this.engine = engine;
    }

    public keydownHandler = (event: KeyboardEvent): void => {
        this.engine.setDirection(event.which);
    };

    public createEventListeners(): void {
        document.addEventListener('keydown', this.keydownHandler, false);
    }

    public create(): void {
        this.createEventListeners();
    }
}

export default ControlHandler;