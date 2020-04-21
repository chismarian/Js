import { Shape } from "./shape.js";
import { Movement } from "./movement.js";

export class O extends (Shape, Movement){
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [1, 1],
            [1, 1]
        ];
        this.color = 'yellow';
    }
}