import { Shape } from "./shape.js";
import { Movement } from "./movement.js";

export class S extends (Shape, Movement){
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [0, 1, 1],
            [1, 1, 0]
        ];
        this.color = 'blue';
    }
}