let numCol = Editor.slider(1, 10, 6);
let numRow = Editor.slider(1, 10, 4);

function setup(){
  createCanvas(600, 400);
}

const rectWidth = Editor.slider(1, 100, 70);
const rectHeight = Editor.slider(1, 100, 70);
const BarX = 20;
const BarY = 30;

function draw(){
  fill("chocolate");
  strokeWeight(10);
  stroke("brown");
  Rows();
  Columns();
}

function Rows(){
  let BarX = 20;
  for (let xi = 0; xi < numCol; xi++) {
    rect(BarX, BarY, rectWidth, rectHeight);
    BarX = BarX + rectWidth;
  }
}

function Columns(){
  let BarX = 20;
  for (let xi = 0; xi < numCol; xi++){
    let BarY = 30;
    for (let yi = 0; yi < numRow; yi++) {
      rect(BarX, BarY, rectWidth, rectHeight);
      BarY = BarY + rectHeight;
  }
  BarX = BarX + rectWidth;
  }
}
