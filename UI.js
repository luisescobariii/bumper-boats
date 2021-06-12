class UI {

  constructor() {
    this.fps = 0;
  }

  update() {
    if (frameCount % 30 === 0) {
      this.fps = Math.floor(frameRate());
    }
  }

  show() {
    push();
    translate(camera.x, camera.y);
    stroke(0);
    strokeWeight(2);
    fill(255);
    textSize(32);
    text(this.fps, 10, 30);
    pop();
  }

}