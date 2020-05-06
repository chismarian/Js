import { Cell2 } from './cell2.js';

export class Grid2 {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.cells = [];
    }

    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 4; column < this.columns+4; column++) {
                this.cells[row][column] = new Cell2(row, column, '#7facf5');
            }
        }
    }


    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 4; column < this.columns+4; column++) {
                this.cells[row][column].draw();
            }
        }
    }

}