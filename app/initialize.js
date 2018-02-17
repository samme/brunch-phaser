window.game = new Phaser.Game({

  type: Phaser.AUTO,

  width: 800,

  height: 600,

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 180 }
    }
  },

  title: '☕️ Brunch with Phaser',

  url: 'https://github.com/samme/brunch-phaser',

  version: '0.0.1',

  banner: {
    background: ['#e54661', '#ffa644', '#998a2f', '#2c594f', '#002d40']
  },

  scene: require('scenes/default')

});
