function setup() {
  createCanvas(400, 400);
  background(240);

  drawGround();
  drawMainBody();
  drawHeadAndEyes();
  drawArms();
  drawCloud();
  drawCloudDetails();
}

function draw() {
  // The draw function is empty but still running, waiting for inputs.
}

function drawGround() {
  fill(200, 160, 100);
  rect(0, 300, 400, 100);
}

function drawMainBody() {
  fill(50, 150, 255);
  ellipse(200, 250, 80, 120);
}

function drawHeadAndEyes() {
  fill(255, 0, 0);
  ellipse(200, 180, 50, 50);
  ellipse(170, 200, 40, 40);
  ellipse(230, 200, 40, 40);
}

function drawArms() {
  stroke(0, 150, 0);
  strokeWeight(5);
  line(200, 250, 200, 180);
  line(200, 250, 170, 200);
  line(200, 250, 230, 200);
}

function drawCloud() {
  fill(255, 255, 255);
  ellipse(300, 350, 80, 30);
}

function drawCloudDetails() {
  fill(255, 0, 0);
  ellipse(300, 330, 40, 40);
  fill(0, 150, 0);
  ellipse(315, 315, 15, 10);
}

// Custom Function: Draws a sun when 'S' key is pressed
function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(50, 50, 60, 60); // Sun
  stroke(255, 204, 0);
  for (let i = 0; i < 360; i += 45) {
    let x1 = 50 + cos(radians(i)) * 40;
    let y1 = 50 + sin(radians(i)) * 40;
    let x2 = 50 + cos(radians(i)) * 30;
    let y2 = 50 + sin(radians(i)) * 30;
    line(x1, y1, x2, y2); // Sun rays
  }
}

// Custom Function: Draws a tree when the mouse is clicked
function drawTree(x, y) {
  fill(139, 69, 19); // Trunk color
  rect(x - 5, y, 10, 30); // Trunk
  fill(34, 139, 34); // Leaves color
  ellipse(x, y - 15, 30, 30); // Leaves
}

// Triggering functions with mouse and keyboard input
function keyPressed() {
  if (key === 'S' || key === 's') {
    drawSun();
  }
}

function mousePressed() {
  drawTree(mouseX, mouseY);
}