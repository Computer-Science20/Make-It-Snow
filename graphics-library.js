//GRAPHICS LIBRARY
//requires  global cnv and ctx variables

// fill the cnavas with the provided color
function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
  }
  
  //set the stroke style
  function stroke(colour) {
    ctx.strokeStyle = colour;
  }
  
  function fill(colour) {
    ctx.fillStyle = colour;
  }
  
  function lineWidth(width) {
    ctx.lineWidth = width;
  }
  
  function font(fontSetting) {
    ctx.font = fontSetting;
  }
  //Draw a stroke or fill rectangle with a top left corner of (x,y) and a height of h
  function rect(x, y, w, h, mode) {
    if (mode === "fill") {
      ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
      ctx.strokeRect(x, y, w, h);
    }
  }
  
  //Draw a line segment from (x1, y1) to (x2, y2)
  function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Endpoint one
    ctx.lineTo(x2, y2); // Endpoint two
    ctx.stroke();
  }
  
  //Draw  stroke or fill circle with center (x, y) and radius of r
  function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
      ctx.fill();
    } else if (mode === "stroke") {
      ctx.stroke();
    }
  }
  
  function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Vertex one
    ctx.lineTo(x2, y2); // Vertex two
    ctx.lineTo(x3, y3); // Vertex three
    if (mode === "fill") {
      ctx.fill();
    } else if (mode === "stroke") {
      ctx.closePath();
      ctx.stroke();
    }
  }
  
  function text(message, x, y, mode) {
    if (mode === "fill") {
      ctx.fillText(message, x, y);
    } else if (mode == "stroke") {
      ctx.strokeText(message, x, y);
    }
  }
  
  function elipse(x, y, xRadius, rotation, mode) {
    ctx.beginPath();
    ctx.elipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    if (mode === "fill") {
      ctx.fill;
    } else if (mode === "stroke") {
      ctx.stroke();
    }
    ctx.stroke();
  }
  