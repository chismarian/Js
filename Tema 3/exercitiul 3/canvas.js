const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.getElementById('playground').append(canvas);
const context = canvas.getContext('2d');

const colors = [
    'blue',
    'red',
    'orange',
    'yellow',
    'green',
    'black',
    'white'
];

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}


class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
        this.dy = 1;
    }

    draw() {
        context.beginPath();
        context.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI
        );
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    move(stepX) {
        this.changeDirectionIfExceededBounds();
        this.x += stepX * this.dx; 
        this.draw();
    }

    changeDirectionIfExceededBounds() {
        if (this.x >= canvas.width - this.radius) {
            this.goToTheLeft();
        }
  
        if (this.x <= this.radius) {
            this.goToTheRight();
        }
        
    }

    goToTheLeft() {
        this.dx = -1;
        this.color = colors[getRandom(0, colors.length)];
        this.radius -=  10;
        console.log("Stanga");
    }

    goToTheRight() {
        this.dx = 1;
        this.color = colors[getRandom(0, colors.length)];
        this.radius += 10
        console.log("Dreapta");
    }


}

 circle = new Circle(
            getRandom(10, canvas.width),
            getRandom(10, canvas.height),
            getRandom(10, 50),
            colors[getRandom(0, colors.length)]
        )


function animateCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle.move(100);
}

setInterval(animateCircle, 500)