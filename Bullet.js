class Bullet {

  constructor(pos, dir) {
    this.pos = createVector(pos.x, pos.y);
    this.radius = 4;
    this.dir = dir;
    this.speed = 2;
    this.dx = cos(this.dir) * this.speed;
    this.dy = sin(this.dir) * this.speed;
    this.isAlive = true;
  }

  update() {
    if (!this.isAlive) { return; }
    this.pos.x += this.dx;
    this.pos.y += this.dy;

    if (!camera.contains) {
      this.die();
      return;
    }

    for (const tile of colliders) {
      if (!tile.isAlive) { continue; }
      if (collidePointPoly(this.pos.x, this.pos.y, tile.poly)) {
        worldExplosions.push(new Explosion(this.pos));
        tile.die();
        this.die();
      }
    }
  }

  show() {
    if (!this.isAlive) { return; }
    fill(0);
    noStroke();
    circle(this.pos.x, this.pos.y, this.radius);
  }

  die() {
    worldBullets.splice(worldBullets.indexOf(this), 1);
  }

}