const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/malo.png",
    OPPONENT_PICTURE_DEAD = "assets/malo_muerto.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    BOSS_PICTURE = "assets/jefe.png",
    BOSS_PICTURE_DEAD = "assets/jefe_muerto.png",
    BOSS_SPEED = OPPONENT_SPEED * 2,
    BOSS_WIDTH = 8,
    BOSS_HEIGHT = 8,
    GAME_OVER_PICTURE = "assets/game_over.png",
    YOU_WIN_PICTURE = "assets/you_win.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/bueno.png",
    PLAYER_PICTURE_DEAD = "assets/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/shot1.png",
    SHOT_PICTURE_OPPONENT = "assets/shot2.png",
    SHOT_WIDTH = 1.5,
    INITIAL_LIVES = 3; // Nueva constante para las vidas del jugador

function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

function collision(div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);
}
var game;
document.addEventListener("DOMContentLoaded", () => {
    game = new Game();
    game.start();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }

  let deferredPrompt;
  const installButton = document.getElementById('installButton');
   
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'block';
   
    installButton.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuario aceptó la instalación');
        } else {
          console.log('Usuario rechazó la instalación');
        }
        deferredPrompt = null;
      });
    });
  });