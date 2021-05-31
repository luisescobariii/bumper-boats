class LandTile extends Tile {
  
    constructor(x, y, r) {
      super(x, y, r);
      this.type = 'land';
      this.isCollider = true;
      this.grassPoly = this.getHexagonVerts(r * 0.75);
    }
    
    show() {
      if (!this.isAlive) { return; }
      stroke(51);
      fill(145, 109, 63);
      beginShape();
      for (const {x, y} of this.poly) {
        vertex(x, y);
      }
      endShape(CLOSE);
      
      fill(49, 145, 44);
      beginShape();
      for (const {x, y} of this.grassPoly) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }
    
  }