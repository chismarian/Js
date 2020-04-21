import { Shape } from "./shape.js";

export class Movement extends Shape{
    constructor(row, column, cells) {
        super(row, column, cells);
    }
    moveUp() {
        this.row--;
    }

    moveDown() {
        this.row++;
    }

    moveLeft() {
        this.column--;
    }

    moveRight() {
        this.column++;
    }
}