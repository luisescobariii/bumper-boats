class Level {
  
    constructor(type) {
      this.types = [0, 1, 2];
      switch(type) {
        case 'random': this.tiles = this.getRandom();
        default:  this.tiles = this.getRandom();
      }
    }
    
    getRandom() {
      const sizeX = width / 20;
      const sizeY = height / 20;
      const tiles = [];
      for (let i = 0; i < sizeY; i++) {
        const row = [];
        for (let j = 0; j < sizeX; j++) {
          const spawner = Math.random();
          switch(true) {
            case spawner < 0.05: row.push(2); break;
            case spawner < 0.1: row.push(1); break;
            default: row.push(0); break;
          }
        }
        tiles.push(row);
      }
      return tiles;
    }
  
  }