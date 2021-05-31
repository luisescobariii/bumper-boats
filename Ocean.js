class Ocean {
  
    constructor(tiles) {
      this.tiles = [];
      
      const r = 20;
      const a = PI / 3;
      let x;
      let y = 0;
      const rsina = r * sin(a);
      const cosa = cos(a);
      for (const row of tiles) {
        x = 0;
        y += rsina * 2;
        const tileRow = [];
        for (let i = 0; i < row.length; i++) {
          x += r * (1 + cosa);
          y = i % 2 === 0 ? y + rsina : y - rsina;
          const tile = this.getTileOfType(row[i], x, y, r)
          tileRow.push(tile);
          if (tile.isCollider) { colliders.push(tile); }
        }
        this.tiles.push(tileRow);
      }
    }
    
    getTileOfType(type, x, y, r) {
      switch(type) {
        case 1: return new LandTile(x, y, r);
        case 2: return new CrateTile(x, y, r);
        default: return  new OceanTile(x, y, r);
      }
    }
    
    update() {
      for (const row of this.tiles) {
        for (const tile of row) {
          tile.update();
        }
      }
    }
    
    show() {
      for (const row of this.tiles) {
        for (const tile of row) {
          tile.show();
        }
      }
    }
    
  }