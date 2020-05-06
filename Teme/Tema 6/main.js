import { Grid } from './grid.js';
import { Grid2 } from './grid2.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';

const rows = 20;
const columns = 10;
let tetrisScore = 0;
let intervalId;



const grid2 = new Grid2(4, 4);
grid2.create();
grid2.draw();

let grid = new Grid(rows, columns);
grid.create();
grid.draw();

let nextShape = generateNewShape(grid2.cells);
nextShape.draw()


document.body.style.background = `radial-gradient(${nextShape.color}, transparent)`;

let shape = generateNewShape(grid.cells, nextShape.type);

let movement = new Movement(shape, grid.cells);


document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            console.log('left');
            break;
        case 'ArrowRight':
            movement.right();
            console.log('right');
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            console.log(getRandomInt(colors.length - 1));
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});


const animate = () => {
    if (movement.canMove) {
        movement.down(intervalId);
        console.log('Moving');
    } else {
        console.log('Stopped');
        clearInterval(intervalId);

        //Score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            document.getElementById('score').innerText = tetrisScore;
            grid.draw();
        }
      
        shape = generateNewShape(grid.cells, nextShape.type);
        grid2.create();
        grid2.draw();
        nextShape = generateNewShape(grid2.cells);
        nextShape.draw();

        if(shape.newShape()){
            movement = new Movement(shape, grid.cells);
            document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
            intervalId = setInterval(animate, 1000);
        }
        else{
            document.getElementById("startGame").disabled = false;
            clearInterval(intervalId);
            movement.gameover =true;
        }
        
    }
}

document.getElementById('startGame').addEventListener('click', () => {
    if(movement.gameover) {
        grid = new Grid(rows, columns);
        grid.create();
        grid.draw();
        shape = generateNewShape(grid.cells);
        document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
        movement = new Movement(shape, grid.cells);
    }
    shape = generateNewShape(grid.cells, nextShape.type);

    document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
    movement = new Movement(shape, grid.cells);
 
    grid2.create();
    grid2.draw();

    nextShape = generateNewShape(grid2.cells);
    nextShape.draw()
  
    document.getElementById("startGame").disabled = true;
    intervalId = setInterval(animate, 1000);
});




