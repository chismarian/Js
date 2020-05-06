import { Validator } from "./validator.js";

export class Movement {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
        this.validator = new Validator(this.shape, this.cells);
        this.canMove = true;
        this.gameover = false;
    }

    up() {
        this.shape.row--;
    }

    down(intervalId) {
        const { row, column } = this.shape;
        this.shape.clear();
        const nextNotAvailable = this.validator.checkNext(row + 1, column);
        if (nextNotAvailable) {
            this.shape.draw();
            if(row === 0) {
                this.gameover = true;
                document.getElementById("startGame").disabled = false;
                clearInterval(intervalId);
            }
            this.canMove = false;
            return ;
        }

        this.shape.row++;
        let next = this.validator.checkNext(row + 2, column);
        if (next) {
            this.canMove = false;

        }
        this.shape.draw();
    }

    left() {
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column--;
        this.shape.draw();
    }

    right() {
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column + 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column++;
        this.shape.draw();
    }

    rotate() {
        const { row, column } = this.shape;

        this.shape.clear();
        const nextTemplate = this.shape.getTemplate(this.shape.templateIndex + 1);
        const nextNotAvailable = this.validator.checkNext(row, column, nextTemplate);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.rotate();
    }
}