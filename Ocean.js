class Ocean {

    constructor(tiles) {
      this.tiles = [];

      const r = 20;
      const a = PI / 3;
      let x;
      let y = 0;
      const rsina = r * sin(a);
      const rsina2 = rsina * 2;
      const cosa = cos(a);
      for (let i = 0; i < tiles.length; i++) {
        const row = tiles[i];
        x = 0;
        y += rsina2;
        const tileRow = [];
        let isEven = false;
        for (let j = 0; j < row.length; j++) {
          x += r * (1 + cosa);
          if (j % 2 === 0) {
            y += rsina;
            isEven = true;
          } else {
            y -= rsina;
            isEven = false;
          }
          const tile = this.getTileOfType(row[j], x, y, r, i, j)
          tileRow.push(tile);
          if (tile.isCollider) { colliders.push(tile); }
        }
        if (isEven) { y -= rsina; }
        this.tiles.push(tileRow);
      }
      this.pos = createVector(this.tiles[0][0].pos.x, this.tiles[0][0].pos.y - rsina);
      this.w = r * (1 + cosa) * this.tiles[0].length - r * 1.5;
      this.h = rsina * this.tiles.length * 2 - rsina;
      console.log(this.w, this.h)
    }

    getTileOfType(type, x, y, r, i, j) {
      switch(type) {
        case 1: return new LandTile(x, y, r, i, j);
        case 2: return new CrateTile(x, y, r, i, j);
        default: return new OceanTile(x, y, r, i, j);
      }
    }

    update() {
      for (const row of this.tiles) {
        for (const tile of row) { tile.update(); }
      }
    }

    show() {
      push();
      translate(width / 2, height / 2);
      pop();
      for (const row of this.tiles) {
        for (const tile of row) { tile.show(); }
      }
      if (config.showOceanBorder) {
        noFill();
        stroke(0, 0, 255);
        strokeWeight(3);
        rect(this.pos.x, this.pos.y, this.w, this.h);
      }
    }

  }