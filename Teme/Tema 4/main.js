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
shapes.push(jShape);
shapes.push(sShape);
shapes.push(zShape);
shapes.push(tShape);

console.log(lShape);

let shape = shapes[Math.floor(Math.random() * shapes.length)];
console.log(shape);

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
            if(shape.row > 0) {
                grid.draw();
                shape.up();
                shape.draw();
            }
            break;
        case 'ArrowDown':
            if(shape.row < grid.rows - shape.template.length){
                grid.draw();
                shape.down();
                shape.draw();
            }
           break;
        case 'ArrowLeft':
            if(shape.column > 0){
                grid.draw();
                shape.left();
                shape.draw();
            }
            break;
        case 'ArrowRight':
            if(shape.column < grid.columns - shape.template[0].length){
                grid.draw();
                shape.right();
                shape.draw();
            }
            break;
        case 'Enter':
                    grid.draw();
                    shape.color = colors[Math.floor(Math.random() * colors.length)];
                    shape.draw();
                    
                break;    
    }
});

// setInterval(() => {
//     if(shape.row < grid.rows - shape.template.length){
//         grid.draw();
//         shape.down();
//         shape.draw();
//     }
//     else {
//         shape = shapes[Math.floor(Math.random() * shapes.length)];  
//         grid.draw();
//         lShape.up();
//         lShape.draw();
//     }
//     console.log(lShape.row);
// }, 500);

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



