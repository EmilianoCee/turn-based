const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function Ball(x, y, color, size) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
};

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

let balls = [];

for (let i = 0; i <= 2; i++) {
    let ball = new Ball(
        width/2,
        height/2,
        `rgb(0, 255, 0)`,
        15*i
    );
    balls.push(ball);
}

console.log(balls)

function loop() {
    ctx.fillStyle = `rgba(0, 0, 0, 0.25)`;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
    }
    requestAnimationFrame(loop);
}
loop();

window.addEventListener(`resize`, function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
})