var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = c.width/2;
var y = c.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
    drawBall();

    if(x + dx > c.width-ballRadius || x + dx < ballRadius) {
       dx = -dx;
   }
   if(y + dy > c.height-ballRadius || y + dy < ballRadius) {
       dy = -dy;
   }
    x += dx;
    y += dy;
}

setInterval(draw, 10);
