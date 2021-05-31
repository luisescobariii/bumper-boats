class Camera {

  constructor(target, zoom = 1) {
    this.target = target;
    this.zoom = zoom;
    this.w = width;
    this.h = height;
  }

  update() {}
  
  show() {
    stroke(0);
    noFill();
    strokeWeight(4);
    rectMode(CENTER);
    rect(this.target.pos.x, this.target.pos.y, this.w, this.h);
  }
  
}