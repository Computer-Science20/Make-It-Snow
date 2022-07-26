//To make snow move, change the y value (increase it)- then create a loop that brings it back to the top
function drawSnow(aSnow) {
    fill(aSnow.color);
    circle(aSnow.x, aSnow.y, aSnow.r, "fill");
  }
  
  function moveSnow(aSnow) {
    aSnow.y++;
    aSnow.y += aSnow.speed;
    if (aSnow.y > cnv.height) {
      aSnow.y = 0;
      aSnow.x = randomInt(0, cnv.width);
    }
  }
  
  function snowArray(total) {
    let temp = [];
    for (let n = 1; n <= total; n++) {
      temp.push(newRandomSnowflake());
    }
    return temp;
  }//To make snow move, change the y value (increase it)- then create a loop that brings it back to the top
function drawSnow(aSnow) {
    fill(aSnow.color);
    circle(aSnow.x, aSnow.y, aSnow.r, "fill");
  }
  
  function moveSnow(aSnow) {
    aSnow.y++;
    aSnow.y += aSnow.speed;
    if (aSnow.y > cnv.height) {
      aSnow.y = 0;
      aSnow.x = randomInt(0, cnv.width);
    }
  }
  
  function snowArray(total) {
    let temp = [];
    for (let n = 1; n <= total; n++) {
      temp.push(newRandomSnowflake());
    }
    return temp;
  }
  
  function newSnowflake(initX, initY, initR, initColor) {
    return {
      x: initX,
      y: initY,
      r: initR,
      color: initColor
    };
  }
  
  function newRandomSnowflake() {
    return {
      x: randomInt(0, cnv.width),
      y: randomInt(0, cnv.height),
      r: randomInt(5, 15),
      speed: Math.random(2, 10),
      color: "white"
    };
  }
  
  
  function newSnowflake(initX, initY, initR, initColor) {
    return {
      x: initX,
      y: initY,
      r: initR,
      color: initColor
    };
  }
  
  function newRandomSnowflake() {
    return {
      x: randomInt(0, cnv.width),
      y: randomInt(0, cnv.height),
      r: randomInt(5, 15),
      speed: Math.random(2, 10),
      color: "white"
    };
  }
  