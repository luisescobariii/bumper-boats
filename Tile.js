class Tile {

    constructor(x, y, r) {
      this.type = 'generic';
      this.radius = r;
      this.pos = createVector(x, y);
      this.poly = this.getHexagonVerts(r);
      this.isCollider = false;
      this.isAlive = true;
      this.visible = false;
    }

    getHexagonVerts(r) {
      const a = PI / 3;
      const verts = [];
      for (let i = 0; i < 6; i++) {
        verts.push(createVector(
          this.pos.x + r * cos(a * i),
          this.pos.y + r * sin(a * i)
        ));
      }
      return verts;
    }

    update() {
      this.visible = camera.contains(this.pos);
    }

    show() {}

    die() {
      this.isAlive = false;
      this.isCollider = false;
    }
  }