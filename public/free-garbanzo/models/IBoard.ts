export interface IBoard {
    width: number;
    height: number;
    identifier: string;
    create(): void;
    clear(): void;
}
