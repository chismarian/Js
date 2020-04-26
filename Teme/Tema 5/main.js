import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';

let score = 0;

let intervalId;

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
let movement = new Movement(shape, grid.cells);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            if(!movement.cantRotate()){
                shape.rotate();
            }
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            break;
        case 'ArrowRight':
            movement.right();
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
    if(movement.canMove) {
        movement.down();
    } else {
        shape.checkIfRemoveline()
        score += shape.score;
        document.getElementById('score').value = score;
        clearInterval(intervalId);
        shape = generateNewShape(grid.cells);
        if(shape.gameover()){
            alert("Game Over! Score: " + score);
            location.reload();
        }
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 500);
        
    }
}

 document.getElementById("start").addEventListener("click", event => {
    let intervalId = setInterval(animate, 500);
 });





