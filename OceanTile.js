class OceanTile extends Tile {

    constructor(x, y, r) {
      super(x, y, r);
      this.type = 'ocean';
      this.maxOpacity = 32;
      this.opacity = Math.random() * this.maxOpacity;
    }

    update() {
      super.update();
      /*
      if (frameCount % 4 === 0) {
        const inc = Math.random() < 0.5 ? -1 : 1;
        this.opacity += inc;
        if (this.opacity < 0) {
          this.opacity = 0;
        } else if (this.opacity > this.maxOpacity) {
          this.opactiy = this.maxOpacity;
        }
      }*/
    }

    show() {
      if (!config.displayOceanTiles) { return; }
      if (!this.visible) { return; }
      noStroke();
      fill(255, this.opacity);
      beginShape();
      for (const {x, y} of this.poly) { vertex(x, y); }
      endShape(CLOSE);
    }

  }