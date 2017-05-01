class GameObjectList {
    public list: any;
    public constructor() {
        this.list = {};
    }

    public add(object: any): void {
        this.list[object.id] = object;
    }

    public removeBy(key: string) {
        delete this.list[key];
    }

    public getList(): any {
        return this.list;
    }
}

export default GameObjectList;
