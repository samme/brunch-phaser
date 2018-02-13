var config = {

  type: Phaser.AUTO,

  width: 800,

  height: 600,

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 180 }
    }
  },

  scene: {

    preload: function () {
      this.load.setPath('assets/');
      this.load.image('sky', 'space3.png');
      this.load.image('logo', 'phaser3-logo.png');
      this.load.image('red', 'red.png');
    },

    create: function () {
      var sky = this.add.image(400, 300, 'sky');
      sky.alpha = 0.5;
      var particles = this.add.particles('red');
      var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
      });
      var logo = this.physics.add.image(400, 100, 'logo');
      logo.setVelocity(100, 200);
      logo.setBounce(1, 1);
      logo.setCollideWorldBounds(true);
      emitter.startFollow(logo);
    }

  }

};

window.game = new Phaser.Game(config);
