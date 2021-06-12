class CrateTile extends OceanTile {

    constructor(x, y, r) {
      super();
      this.type = 'crate';
      this.pos = createVector(x, y);
      const boxR = r / 4;
      this.poly = [
        createVector(this.pos.x - boxR, this.pos.y - boxR),
        createVector(this.pos.x + boxR, this.pos.y - boxR),
        createVector(this.pos.x + boxR, this.pos.y + boxR),
        createVector(this.pos.x - boxR, this.pos.y + boxR),
      ];
      this.backPoly = this.getHexagonVerts(r);
      this.isCollider = true;
    }

    show() {
      if (!this.visible) { return; }

      if (config.displayOceanTiles) {
        noStroke();
        fill(255, this.opacity);
        beginShape();
        for (const {x, y} of this.backPoly) { vertex(x, y); }
        endShape(CLOSE);
      }

      if (!this.isAlive) { return; }
      stroke(51);
      fill(255, 186, 179);
      if (this.checking) { fill('yellow') }
      beginShape();
      for (const {x, y} of this.poly) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }