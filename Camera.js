class Camera {

  constructor(target) {
    this.target = target;
    this.smallestSide = width > height ? height + 0 : width + 0;
    this.zoom = this.smallestSide / 400;
  }

  update() {
    this.w = width / this.zoom;
    this.h = height / this.zoom;
    this.halfW = this.w / 2;
    this.halfH = this.h / 2;
    this.x = this.target.pos.x - this.halfW;
    this.y = this.target.pos.y - this.halfH;
    if (this.x < ocean.pos.x) { this.x = ocean.pos.x; }
    else if (this.x + this.w > ocean.pos.x + ocean.w) { this.x = ocean.pos.x + ocean.w - this.w; }
    if (this.y < ocean.pos.y) { this.y = ocean.pos.y; }
    else if (this.y + this.h > ocean.pos.y + ocean.h) { this.y = ocean.pos.y + ocean.h - this.h; }
  }

  show() {
    scale(this.zoom);
    translate(-this.x, -this.y);
    if (config.applyCameraTransform) {
    } else {
      noFill();
      stroke(0);
      strokeWeight(1);
      rect(this.x, this.y, this.w, this.h);
    }
  }

  contains(pos) {
    if (pos.x < this.x - 20 || pos.x > this.x + this.w + 20 ||
      pos.y < this.y - 20 || pos.y > this.y + this.h + 20) {
      return false;
    }
    return true;
  }

}