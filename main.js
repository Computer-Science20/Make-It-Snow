let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let snowflakes = snowArray(100);

requestAnimationFrame(draw);

function draw() {
  background("black");

  for (let i = 0; i < snowflakes.length; i++) {
    moveSnow(snowflakes[i]);
    drawSnow(snowflakes[i]);
  }
  requestAnimationFrame(draw);
}

// Key events
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.keyCode === 39) {
    //right arrow - add a new bubble
    addSnowflake();
  } else if (event.keyCode === 37) {
    //left arrow - remove the last bubble
    snowflakes.pop();
  }
}

// TIMERS
// setInterval(addSnowflake, 1000);

function addSnowflake() {
  snowflakes.push(newRandomSnowflake());
}
