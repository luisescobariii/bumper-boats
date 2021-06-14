class Boat {

    constructor(x, y, color) {
      this.pos = createVector(x, y);
      this.heading = 0;
      this.direction = 0;
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(0, 0);
      this.bullets = 0;
      this.color = color;
      this.poly = this.getPoly();
      this.ripples = [];
      this.isAlive = true;
    }

    getPoly() {
      return [
        createVector(this.pos.x + 0, this.pos.y - 10),
        createVector(this.pos.x + 6, this.pos.y - 2),
        createVector(this.pos.x + 4, this.pos.y + 10),
        createVector(this.pos.x + - 4, this.pos.y + 10),
        createVector(this.pos.x + - 6, this.pos.y - 2),
      ];
    }

    update() {
      this.control();

      this.direction += this.heading;
      this.pos.add(this.velocity);
      this.velocity.mult(0.99);
      this.heading *= 0.95;

      this.poly = this.getPoly();

      if (frameCount % 6 === 0 && this.velocity.mag() > 0.25) {
        this.ripples.push(new Ripple(this.pos));
      }
      for (const ripple of this.ripples) { ripple.update(); }
      if (this.ripples.length > 0 && this.ripples[0].opacity < 0) {
        this.ripples.unshift();
      }
      if (!this.isAlive) { return; }
      for (const tile of colliders) {
        if (!tile.visible || !tile.isAlive) { continue; }
        const a = this.pos.x - tile.pos.x;
        const b = this.pos.y - tile.pos.y;
        if (a * a + b * b < 2500) {
          tile.checking = true;
          if (collidePolyPoly(this.poly, tile.poly)) {
            switch (tile.type) {
              case 'land': this.die(); break;
              case 'crate': tile.die(); this.bullets++; break;
            }
          }
        } else {
          tile.checking = false;
        }
      }
    }

    show() {
      for (const ripple of this.ripples) { ripple.show(); }
      push();
      translate(this.pos);
      rotate(this.direction + HALF_PI);
      stroke(0);
      strokeWeight(2);
      if (this.bullets > 0) {
        rectMode(CENTER);
        fill(0);
        rect(0, 2, 13, 3);
      }
      fill(this.isAlive ? 255 : 51);
      beginShape();
      vertex(0, -10);
      bezierVertex(6, -2, 6, -2, 4, 10);
      vertex(4, 10);
      vertex(-4, 10);
      bezierVertex(-6, -2,-6, -2, 0, -10);
      endShape(CLOSE);
      pop();
    }

    control() {
      if (!this.isAlive) { return; }
      if (keyIsDown(UP_ARROW)) {
        this.acceleration = p5.Vector.fromAngle(this.direction);
        this.acceleration.mult(0.01);
        this.velocity.add(this.acceleration);
      }
      if (keyIsDown(LEFT_ARROW)) { this.heading = -0.03; }
      else if (keyIsDown(RIGHT_ARROW)) { this.heading = 0.03; }
    }

    fire() {
      if (!this.isAlive) { return; }
      if (this.bullets === 0) { return; }
      worldBullets.push(
        new Bullet(this.pos, this.direction + HALF_PI),
        new Bullet(this.pos, this.direction + PI + HALF_PI)
      );
      this.bullets--;
    }

    die() {
      this.isAlive = false;
      this.velocity.mult(0);
      worldExplosions.push(new Explosion(this.pos));
    }

  }