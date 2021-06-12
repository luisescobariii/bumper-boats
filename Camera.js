class Camera {

  constructor(target) {
    this.target = target;
    this.smallestSide = width > height ? height + 0 : width + 0;
    this.zoom = this.smallestSide / 400;
    // this.zoom = 1;
  }

  update() {
    this.w = width / this.zoom;
    this.h = height / this.zoom;
    this.halfW = this.w / 2;
    this.halfH = this.h / 2;
    this.x = this.target.pos.x - this.halfW;
    this.y = this.target.pos.y - this.halfH;
    if (this.x < 0) { this.x = 0; }
    else if (this.x > width - this.w) { this.x = width - this.w}
    if (this.y < 0) { this.y = 0; }
    else if (this.y > height - this.h) { this.y = height - this.h}
  }

  show() {
    if (config.applyCameraTransform) {
      scale(this.zoom);
      translate(-this.x, -this.y);
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