import { Shape } from "./shape.js";
import { Movement } from "./movement.js";

export class Z extends (Shape, Movement){
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [1, 1, 0],
            [0, 1, 1]
        ];
        this.color = 'red';
    }
}