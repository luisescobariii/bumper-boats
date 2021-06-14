let player;
let ocean;
let colliders = [];
let worldBullets = [];
let worldExplosions = [];
let ui;
let camera;
let config;

function setup() {
  config = new Config();
  createCanvas(windowWidth, windowHeight);

  const level = new Level('random');
  ocean = new Ocean(level.tiles);

  player = new Boat(ocean.w / 2 + ocean.pos.x, ocean.h / 2 + ocean.pos.y);
  ui = new UI();
  camera = new Camera(player);
}

function update() {
  camera.update()
  ocean.update();
  player.update();
  worldBullets.forEach(b => b.update());
  worldExplosions.forEach(b => b.update());
  ui.update();
}

function keyReleased() {
  if (keyCode === 32) { player.fire(); }
}

function show() {
  camera.show();
  ocean.show();
  player.show();
  worldBullets.forEach(b => b.show());
  worldExplosions.forEach(b => b.show());
  ui.show();
}

function draw() {
  update();
  background(90, 171, 196);
  show();
}