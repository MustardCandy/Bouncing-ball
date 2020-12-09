
var ctx;
var dx = 3;
var dy = 3;
var y = 150;
var x = 25;

function draw(){
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 300, 300);
ctx.beginPath()
ctx.arc(x,y,10,0,Math.PI*2)
ctx.closePath();
ctx.fill();
if (( x<10 )||(x>290))
dx=-dx;
if ( (y<10 )||( y>290))
dy= -dy;
x+=dx;
y+=dy;
}
setInterval (draw,10);
