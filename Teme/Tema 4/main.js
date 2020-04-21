import { Grid } from './grid.js';
import { L } from './shapes/l-shape.js';
import { O } from './shapes/o-shape.js';
import { S } from './shapes/s-shape.js';
import { Z } from './shapes/z-shape.js';
import { I } from './shapes/i-shape.js';
import { J } from './shapes/j-shape.js';
import { T } from './shapes/t-shape.js';



const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

const lShape = new L(0, 0, grid.cells);
lShape.draw();

const tShape = new T(0, 2, grid.cells);
tShape.draw();

const jShape = new J(0, 5, grid.cells);
jShape.draw();

const iShape = new I(4, 1, grid.cells);
iShape.draw();

const zShape = new Z(4, 3, grid.cells);
zShape.draw();

const sShape = new S(9, 1, grid.cells);
sShape.draw();

const oShape = new O(9, 5, grid.cells);
oShape.draw();

const shapes = [];
shapes.push(lShape);
shapes.push(oShape);
shapes.push(iShape);
shapes.push(sShape);
shapes.push(zShape);

console.log(shapes);

const colors = [
    '#ff0000',
    '#ffbf00',
    '#ffff00',
    '#40ff00',
    '#00ffbf',
    '#0000ff',
    '#bf00ff'
 ]

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
                grid.draw();
                lShape.moveUp();
                lShape.draw();
           
            break;
        case 'ArrowDown':
                grid.draw();
                lShape.moveDown();
                lShape.draw();
                console.log(lShape);
            break;
        case 'ArrowLeft':
     
                grid.draw();
                lShape.moveLeft();
                lShape.draw();
            
            break;
        case 'ArrowRight':
         
                grid.draw();
                lShape.moveRight();
                lShape.draw();
            break;
        case 'Enter':
                    grid.draw();
                    lShape.color = colors[Math.floor(Math.random() * colors.length)];
                    lShape.draw();
                break;    
    }
});

// setInterval(() => {
//     if(lShape.row +3 < grid.rows){
//         grid.draw();
//         lShape.moveDown();
//         lShape.draw();
//     }
//     else {
//         lShape.moveUp();
//     }
//     console.log(lShape.row);
// }, 1000);

// function writeText(text, callback) {
//     console.log('Inainte de afisare');
//     console.log(text);
//     console.log('Dupa de afisare');
//     callback();
// }

// function writeEnd() {
//     console.log('The end.');
// }

// writeText('Salut!', writeEnd);



