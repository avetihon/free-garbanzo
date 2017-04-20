class GameObjectList {
    public list: any[];
    public constructor() {
        this.list = [];
    }

    public add(object: any): void {
        this.list.push(object);
    }
}

export default GameObjectList;