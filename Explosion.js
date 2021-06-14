class Explosion {

    constructor(pos) {
        this.pos = createVector(pos.x, pos.y);
        this.diameter = 0;
        this.maxDiameter = 50;
        this.growing = true;
        this.opacity = 0;
        this.growing = true;
        this.isAlive = true;
    }

    update() {
        if (!this.isAlive) { return; }
        if (this.growing) {
            this.diameter += 5;
            this.opacity += 25;
            if (this.diameter >= this.maxDiameter) {
                this.growing = false;
            }
        } else {
            this.diameter -= 0.1;
            this.opacity -= 2;
            if (this.opacity <= 0) {
                this.die();
            }
        }
    }

    show() {
        if (!this.isAlive) { return; }
        fill(255, this.opacity);
        noStroke();
        circle(this.pos.x, this.pos.y, this.diameter);
    }

    die() {
        worldExplosions.splice(worldExplosions.indexOf(this), 1);
    }

}