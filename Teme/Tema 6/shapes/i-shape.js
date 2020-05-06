import { Shape } from "./shape.js";

export class I extends Shape {
    constructor(row, column, cells, type) {
        super(row, column, cells, 'blue');
        this.template = this.getTemplates()[this.templateIndex];
        this.type = type;
    }

    getTemplates() {
        const template_1 = [
            [1],
            [1],
            [1],
            [1]
        ],
        template_2 = [
            [1, 1, 1, 1]
        ];

        return [template_1, template_2];
    }
}