let player;
let ocean;
let colliders = [];
let ui;
let camera;

let zoomSlider;

function setup() {
  collideDebug(true); // enable debug mode
  zoomSlider = createSlider(1, 10, 1, 0.01);
  createCanvas(windowWidth, windowHeight - 30);
  
  const level = new Level('random');
  ocean = new Ocean(level.tiles);
  
  player = new Boat(width / 2, height / 2);
  ui = new UI();
  camera = new Camera(player);
}

function update() {
  ocean.update();
  player.update();
  ui.update();
  camera.update()
}

function show() {
  ocean.show();
  player.show();
  ui.show();
  camera.show();
}

function draw() {
  scale(zoomSlider.value());
  update();
  background(90, 171, 196);
  show();
}