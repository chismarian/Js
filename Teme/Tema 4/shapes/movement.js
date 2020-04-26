import { Shape } from "./shape.js";

export class Movement extends Shape{
    constructor(row, column, cells) {
        super(row, column, cells);
    }
    up() {
        this.row--;
    }

    down() {
        this.row++;
    }

    left() {
        this.column--;
    }

    right() {
        this.column++;
    }
}