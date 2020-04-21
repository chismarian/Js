const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");

const rows = 20;
const columns = 20;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            if(row % 2 == 0){
                grid[row][column] = new Cell(row, column, column % 2   ? 'red' : 'blue');
            }
            else{
                grid[row][column] = new Cell(row, column, column % 2   ? 'blue' : 'red');
            }
            
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].draw();
        }
    }
}

createGrid();
drawGrid();

const square = new Square(2,3);
square.draw();

const square2 = new Square(5,7);
square2.draw();