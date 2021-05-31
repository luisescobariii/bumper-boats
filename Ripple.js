class Ripple {
  
    constructor(pos) {
      this.pos = createVector(pos.x, pos.y);
      this.color = color(255);
      this.radius = 12;
      this.opacity = 60;
    }
    
    update() {
      this.radius += 0.3;
      this.opacity -= 1.5;
      this.color = color(255, this.opacity);
    }
    
    show() {
      noFill();
      stroke(this.color);
      strokeWeight(1);
      circle(this.pos.x, this.pos.y, this.radius);
    }
    
  }