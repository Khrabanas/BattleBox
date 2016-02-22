console.log("script running");
var c = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


c.width = 1300;
c.height = 950;

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 1300, 950);

var cursor = {
  x: 650,
  y: 475,
}


document.onmousemove = function(e) {
  var cRect = c.getBoundingClientRect();
  cursor.x = e.clientX - cRect.left;
  cursor.y = e.clientY - cRect.top;
  block.x = cursor.x - (block.width/2);
  block.y = cursor.y - (block.width/2);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(0, 0, c.width, c.height);
  drawObj(block, blockTex);
}

var track1 = new Audio("assets/dubstep.mp3");


var block = {
  x: 400,
  y: 400,
  width: 130,
  height: 130,
  state: 0,
}

var blockTex = {
  loaded: false,
  image: new Image(),
  tileWidth: 130,
  tileHeight: 130,
}

blockTex.image.onload = function() {
  blockTex.loaded = true;
}
blockTex.image.src = 'assets/block.png';
function drawObj(obj, tex) {
  if (tex.loaded) {
  ctx.drawImage(
      tex.image,
      obj.state * tex.tileWidth,
      0,
      obj.width,
      obj.height,
      obj.x,
      obj.y,
      obj.width,
      obj.height
    );
  }
}

/*function drawBlock() {
  if (blockTex.loaded) {
  ctx.drawImage(
      blockTex.image,
      block.state * blockTex.tileWidth,
      0,
      block.width,
      block.height,
      block.x,
      block.y,
      block.width,
      block.height
    );
  }
}*/

function render() {
  console.log("rendering");

}


function run() {
  console.log("running");

}

// setInterval(run, 10);
