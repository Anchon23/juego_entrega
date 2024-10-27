// Boss.js
class Boss extends Character {
    constructor(game) {
        const height = BOSS_HEIGHT * game.width / 100,
              width = BOSS_WIDTH * game.width / 100,
              x = getRandomNumber(game.width - width / 2),
              y = 0,
              speed = BOSS_SPEED,
              myImage = BOSS_PICTURE,
              myImageDead = BOSS_PICTURE_DEAD;
        
        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.isDefeated = false;
    }

    collide() {
        if (!this.dead) {
            this.isDefeated = true;
            super.collide();
        }
    }

    update() {
        if (!this.dead && !this.game.ended) {
            // Define el movimiento específico del jefe
            this.y += this.speed;
            if (this.y > this.game.height) {
                this.y = 0;
                this.x = getRandomNumber(this.game.width - this.width);
            }
        }
        this.render();
    }
}