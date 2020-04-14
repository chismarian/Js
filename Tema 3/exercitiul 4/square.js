class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        context.beginPath();
        context.fillStyle = 'white';
        context.rect((this.y - 1) * 30, (this.x - 1) * 30, 30, 30);
        context.fill();
        context.stroke();
        context.closePath();
    }
}