import { Shape } from './shape.js';

export class L extends Shape {
    constructor(row, column, cells, type) {
        super(row, column, cells, 'orange');
        this.type = 2;
        this.template = [
            [1, 0],
            [1, 0],
            [1, 1]
        ];
    }

    getTemplates() {
        const template_1 = [
            [1, 0],
            [1, 0],
            [1, 1]
        ],
        template_2 = [
            [1, 1, 1],
            [1, 0, 0],
        ],
        template_3 = [
            [1, 1],
            [0, 1],
            [0, 1]
        ],
        template_4 = [
            [0, 0, 1],
            [1, 1, 1]
        ];

        return [template_1, template_2, template_3, template_4];
    }
}