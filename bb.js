console.log("script running");
var c = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
c.width = 1300;
c.height = 950;
ctx.fillStyle = "#11F0B8";
ctx.fillRect(0, 0, 1300, 950);




document.onmousemove = function(e) {
  var cRect = c.getBoundingClientRect();
  cursor.x = e.clientX - cRect.left;
  cursor.y = e.clientY - cRect.top;
  cursor.texX = cursor.x - (cursor.width/2);
  cursor.texY = cursor.y - (cursor.width/2);
}

function loadImg(obj, file) {
  obj.image.onload = function() {
    obj.loaded = true;
    console.log("img loaded");
  }
  obj.image.src = 'assets/' + file;

}
//ready

// TODO: See if I can make these a function while keeping functionality.
var cursor = {
  x: 400,
  y: 400,
  texX: 400,
  texY: 400,
  width: 32,
  height: 32,
  tileWidth: 32,
  tileHeight: 32,
  state: 0,
  loaded: false,
  image: new Image(),
  type: "ghost",
}

// TODO: make the below a function. done!
loadImg(cursor, "scope.png");

var avatar = {
  x: 400,
  y: 400,
  width: 128,
  height: 128,
  texX: 400,
  texY: 400,
  tileWidth: 128,
  tileHeight: 128,
  state: 0,
  loaded: false,
  image: new Image(),
  type: "dynamic",
}
loadImg(avatar, "avatar.png");

var block = {
  x: 400,
  y: 400,
  width: 130,
  height: 130,
  texX: 400,
  texY: 400,
  tileWidth: 130,
  tileHeight: 130,
  state: 0,
  loaded: false,
  image: new Image(),
  type: "static",
}

loadImg(block, "block.png");



function drawObj(obj) {
  if (obj.loaded) {
  ctx.drawImage(
      obj.image,
      obj.state * obj.tileWidth,
      0,
      obj.width,
      obj.height,
      obj.texX,
      obj.texY,
      obj.width,
      obj.height
    );
  }
}

function moveObj(obj) {
  // body...
}

var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});

function update() {
  console.log("updating");

  for (var k in keysDown) {
    switch (Number(k)) {
    //commented lines are for alternative keys.
    //case 37:
    case 65:
      avatar.texX -= 30
      break;
    //case 38:
    case 87:
      avatar.texY -= 30
      break;
    //case 39:
    case 68:
      avatar.texX += 30
      break;
    //case 40:
    case 83:
      avatar.texY += 30
      break;
    }
  }
}

function render() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#11F0B8';
  ctx.fillRect(0, 0, c.width, c.height);
  drawObj(avatar);
  drawObj(cursor);
}


function run() {
  update();
  render();
}

setInterval(run, 20);
