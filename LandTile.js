class LandTile extends Tile {

    constructor(x, y, r, i, j) {
      super(x, y, r, i, j);
      this.type = 'land';
      this.isCollider = true;
      this.grassPoly = this.getHexagonVerts(r * 0.75);
    }

    show() {
      if (!this.visible) { return; }
      if (!this.isAlive) { return; }
      stroke(51);
      strokeWeight(2);
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

    die() {
      ocean.tiles[this.rowIndex].splice(
        this.columnIndex,
        1,
        new OceanTile(this.x, this.y, this.r, this.rowIndex, this.columnIndex)
      );
      colliders.splice(colliders.indexOf(this), 1);
    }

  }