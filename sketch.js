let player;
let ocean;

let zoomSlider;

function setup() {
  collideDebug(true); // enable debug mode
  zoomSlider = createSlider(1, 10, 2, 0.01);
  createCanvas(windowWidth, windowHeight - 30);
  
  const level = new Level('random');
  ocean = new Ocean(level.tiles);
  
  player = new Boat(0, 0);
}

function update() {
  ocean.update();
  player.update();
}

function show() {
  ocean.show();
  player.show();  
}

function draw() {
  translate(width / 2, height / 2);
  scale(zoomSlider.value());
  update();
  background(90, 171, 196);
  show();
}