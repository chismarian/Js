export class Shape {
    constructor(row, column, cells, color) {
        this.row = row;
        this.column = column;
        this.cells = cells;
        this.color = color;
        this.templateIndex = 0;
        this.score = 0;
    };

    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                    this.cells[this.row + row][this.column + column].isEmpty = false;
                }
            }
        }
    }

    clear() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw('#7facf5');
                    this.cells[this.row + row][this.column + column].isEmpty = true;
                }
            }
        }
    }

    rotate() {
        const length = this.getTemplates().length;
        this.templateIndex++;
        this.template = this.getTemplates()[this.templateIndex % length];
        this.draw();
    }

    checkIfRemoveline() {
        // this.score += this.getScore();
        for (let row = this.cells.length - 1; row >= this.row; row--) {
            let count = 0
            for (let column = 0; column < this.cells[0].length; column++) {
                if(this.cells[row][column].isEmpty == false) {
                    count++;
                }
            }
            if(count == this.cells[0].length){
                this.score += 10;
                this.removeline(row);
            }
        }
    }
    removeline(Row) {
        for (let column = 0; column < this.cells[0].length; column++) {
            this.cells[Row][column].draw();
            this.cells[Row][column].isEmpty = true;
        }
    }

    // getScore(){
    //     let score = 0;
    //     for (let row = 0; row < this.template.length; row++) {
    //         for (let column = 0; column < this.template[row].length; column++) {
    //             if (this.template[row][column] === 1) {
    //                 score++;
    //             }
    //         }
    //     }
    //     return score;
    // }
    gameover() {
            for (let row = 0; row < this.template.length; row++) {
                for (let column = 4; column < 4 + this.template[row].length; column++) {
                        if(!this.cells[row][column].isEmpty){
                            return true;
                        }
                }
            }  
        }       

}