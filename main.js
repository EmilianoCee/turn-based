const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);

// set variables and canvas size as window height and width
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;

// defines Point object constructer 
function Point(x, y, color, size) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
};

// 
Point.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

// empty array called points to store the multiple instances of point
let points = [];


for (let k = 0; k <= 3; k++) {
    let int = 1;
    if(k%2) {
        int *= -1;
    }
    for (let j = 0; j <= 2; j++) {
        for (let i = 0; i <= j; i++) {
            let point = new Point(
                (canvasWidth/2) + (canvasWidth/20)*(i+1) * int,
                (canvasHeight/2) + (canvasWidth/20)*(j+1) * int,
                `rgb(${100*j}, 150, ${100*i})`,
                15
            );
            points.push(point);
        }
    }
}
console.log(points)

function loop() {
    ctx.fillStyle = `rgba(0, 0, 0, 0.25)`;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < points.length; i++) {
        points[i].draw();
    }
    requestAnimationFrame(loop);
}
loop();

window.addEventListener(`resize`, function() {
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
})