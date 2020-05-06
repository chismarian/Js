export class Cell2 {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = document.getElementById('canvasId2');
        this.context = this.canvas.getContext("2d");
        this.width = 30;
        this.height = 30;
        this.isEmpty = true;
    }

draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.rect((this.y-4) * this.height, this.x * this.width, this.width, this.height);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
}
}