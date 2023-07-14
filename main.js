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

for (let i = 0; i < 7; i++) {
    let point = new Point(
        (canvasWidth/2),
        (canvasHeight/2) + (canvasHeight/7.5)*(i-3),
        `rgb(255, 0, 0)`,
        15
    );
    points.push(point)
}

for (let i = 0; i < 7; i++) {
    if (i==3) {
        i++;
    }
    let point = new Point(
        (canvasWidth/2) + (canvasWidth/10)*(i-3),
        (canvasHeight/2),
        `rgb(0, 0, 255)`,
        15
    );
    points.push(point)
}

for (let l = 1; l <= 2; l++) {
    for (let k = 1; k <= 2; k++) {
        for (let j = 0; j <= 2; j++) {
            for (let i = 0; i <= j; i++) {
                let point = new Point(
                    (canvasWidth/2) + (canvasWidth/10)*(i+1) * (k%2*2-1),
                    (canvasHeight/2) + (canvasHeight/7.5)*(j-3) * (l%2*2-1),
                    `rgb(0, 255, 0)`,
                    15
                );
                points.push(point);
            }
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