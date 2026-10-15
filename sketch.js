function setup() {
  createCanvas(windowWidth, windowHeight);
  current_colour = (200, 0, 0);
  noStroke();
  background(220);
  
}
function draw() {
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  let circleSize = map(speed, 0, 50, 10, 100, true);
  let r = map(speed, 0, 50, 225, 50, true);
  let g = map(speed, 0, 50, 225, 0, true);

  fill(r, g, 150, 900);
  noStroke();
  circle(mouseX, mouseY, circleSize);
}






