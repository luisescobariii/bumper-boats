class OceanTile extends Tile {

    constructor(x, y, r, i, j) {
      super(x, y, r, i, j);
      this.type = 'ocean';
      this.maxOpacity = 32;
      this.opacity = Math.random() * this.maxOpacity;
      this.fadeMult = Math.random() * 0.3;
    }

    update() {
      super.update();

      this.opacity += this.fadeMult;
      if (this.opacity <= 0 || this.opacity >= this.maxOpacity) {
        this.fadeMult *= -1;
      }
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