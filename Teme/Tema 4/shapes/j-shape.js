import { Shape } from "./shape.js";
import { Movement } from "./movement.js";

export class J extends (Shape, Movement){
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [0, 1],
            [0, 1],
            [1, 1]
        ];
        this.color = 'purple';
    }
}