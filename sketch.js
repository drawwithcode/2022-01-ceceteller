// vecchie prove
/*
// put setup code here
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("cornsilk");
  frameRate(24);
  angleMode(DEGREES);
}

// put drawing code here
function draw() {
  for (let a = 0; a < windowWidth; a = a + 215) {
    for (let b = 0; b < windowHeight; b = b + 300) {
      fill(random(myColors));
      noStroke;
      let x = random(0, width);
      let y = random(0, height);
      let r = random(0, 100);
      ellipse(x, y, r);
    }
  }

  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseDragged() {
  strokeWeight(10);
  fill(random(myColors));
  stroke(random(myColors));
  ellipse(mouseX, mouseY, myStroke);
}

function mouseReleased() {}
*/

// dichiaro Arrays per: ampiezza segmenti di arco, raggi di insiemi di circonferenze, colori
let mySectors = [3, 5, 7, 10, 23];
let myRadius = [100, 120, 10, 30, 50, 70, 90, 40, 300];
let myColors = [
  "MediumBlue",
  "FireBrick",
  "DarkOrange",
  "Gold",
  "LimeGreen",
  "DarkOrchid",
];

// disegno la tela
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("cornsilk");
  angleMode(DEGREES);
  noFill();
  frameRate(10);
  strokeCap(ROUND);
}

//scrivo intestazioni
function draw() {
  //TESTO
  push();
  textSize(70);
  fill(random(myColors));
  stroke("black");
  strokeWeight(0);
  textStyle(BOLDITALIC);
  textAlign(CENTER);
  text("draw your suns", width / 2, 300);
  pop();

  push();
  textSize(20);
  fill(myColors[1]);
  stroke("black");
  strokeWeight(0);
  textStyle(NORMAL);
  textAlign(CENTER);
  text("as if you were Sol LeWitt's compass", width / 2, 350);
  pop();

  // dichiaro variabili dei for loop
  let s1 = random(mySectors);
  let n = 120;
  let x = random(0, width);
  let y = random(0, height);
  let m = random(0, mouseY / 2);

  //disegno il for loop dei cerchi che comprendono circonferenze che comprendono archi
  for (let w = 0; w < 2 + m / 2; w = w + 20) {
    for (let i = 0; i < n; i++) {
      stroke(random(myColors));
      strokeWeight(10);
      arc(x, y, w, w, i * s1, (i + 1) * s1);
    }
  }
}

// se trascini il mouse disegni la tua stringa di cerchi ma con i bordi squadrati
function mouseDragged() {
  let s1 = random(mySectors);
  let n = 120;

  for (let w = 0; w < mouseX / 7; w = w + 20) {
    for (let i = 0; i < n; i++) {
      stroke(random(myColors));
      strokeWeight(15);
      strokeCap(SQUARE);
      arc(mouseX, mouseY, w, w, i * s1, (i + 1) * s1);
    }
  }
}

// rilasciand il mouse tornano stondati
function mouseReleased() {
  strokeCap(ROUND);
}
