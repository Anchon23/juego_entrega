/**
 * Jefe final del juego. Hereda de la clase Opponent.
 * @extends Opponent
 */
class Boss extends Opponent {
    /**
     * Inicializa un jefe final
     * @param game {Game} La instancia del juego al que pertenece el jefe final
     */
    constructor(game) {
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = OPPONENT_SPEED * 2, // Doble velocidad que el triángulo
            myImage = "assets/jefe.png",
            myImageDead = "assets/jefe_muerto.png";

        super(game, width, height, x, y, speed, myImage, myImageDead);
    }

    /**
     * Actualiza los atributos de posición del jefe final
     */
    update() {
        if (!this.dead && !this.game.ended) {
            this.y += this.speed;
            if (this.y > this.game.height) {
                this.y = 0;
            }
            // Lógica de movimiento específica para el jefe final puede ser añadida aquí
        }
    }

    /**
     * Mata al jefe final
     */
    collide() {
        if (!this.dead) {
            setTimeout(() => {
                this.game.removeOpponent(); // Llamar al método para eliminar al oponente
            }, 2000);
            super.collide(); // Llamar al método collide de la clase padre
        }
    }
}