/**
 * Monstruo al que tenemos que destruir
 */
class Opponent extends Character {
    constructor(game) {
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width),
            y = 0,
            speed = OPPONENT_SPEED,
            myImage = OPPONENT_PICTURE,
            myImageDead = OPPONENT_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
        // Direcciones iniciales de movimiento
        this.changeDirectionInterval = 60; // Cambiar dirección cada 60 frames
        this.frameCount = 0;
        this.speedX = Math.random() < 0.5 ? speed : -speed;
        this.speedY = Math.random() < 0.5 ? speed : -speed;
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }

    /**
     * Crea un nuevo disparo
     */
    shoot () {
        if (!this.dead && !this.game.ended) {
            if (!this.game.paused) {
                this.game.shoot(this);
            }
            setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
        }
    }

    /**
     * Actualiza los atributos de posición del oponente
     */
    update() {
        if (!this.dead && !this.game.ended) {
            this.frameCount++;

            // Cambiar de dirección aleatoriamente cada cierto intervalo
            if (this.frameCount >= this.changeDirectionInterval) {
                this.speedX = Math.random() < 0.5 ? this.speed : -this.speed;
                this.speedY = Math.random() < 0.5 ? this.speed : -this.speed;
                this.frameCount = 0;
            }

            this.x += this.speedX;
            this.y += this.speedY;

            // Rebotar en los bordes y cambiar dirección
            if (this.x <= 0) {
                this.x = 0;
                this.speedX = Math.abs(this.speedX); // Mover hacia la derecha
            } else if (this.x >= this.game.width - this.width) {
                this.x = this.game.width - this.width;
                this.speedX = -Math.abs(this.speedX); // Mover hacia la izquierda
            }

            if (this.y <= 0) {
                this.y = 0;
                this.speedY = Math.abs(this.speedY); // Mover hacia abajo
            } else if (this.y >= this.game.height - this.height) {
                this.y = this.game.height - this.height;
                this.speedY = -Math.abs(this.speedY); // Mover hacia arriba
            }
        }
        this.render();
    }


    /**
     * Mata al oponente
     */
    collide() {
        
        if (!this.dead) {
            setTimeout(() => {
                this.game.removeOpponent();
            }, 2000);
            super.collide();
        }

    }
}
