let player;
let ocean;
let colliders = [];
let ui;
let camera;
let config;

function setup() {
  config = new Config();
  createCanvas(windowWidth, windowHeight);

  const level = new Level('random');
  ocean = new Ocean(level.tiles);

  player = new Boat(width / 2, height / 2);
  ui = new UI();
  camera = new Camera(player);
}

function update() {
  camera.update()
  ocean.update();
  player.update();
  ui.update();
}

function show() {
  camera.show();
  ocean.show();
  player.show();
  ui.show();
}

function draw() {
  update();
  background(90, 171, 196);
  show();
}