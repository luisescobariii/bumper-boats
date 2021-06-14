class CrateTile extends OceanTile {

    constructor(x, y, r, i, j) {
      super(x, y, r, i, j);
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
      strokeWeight(2);
      fill(255, 186, 179);
      beginShape();
      for (const {x, y} of this.poly) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }

    die() {
      super.die();
      colliders.splice(colliders.indexOf(this), 1);
    }

  }