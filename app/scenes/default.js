module.exports = {

  key: 'default',

  init: function (data) {
    console.log('init', data, this);
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
    this.input.keyboard.once('keydown_Q', this.quit, this);
  },

  update: function () {
    this.score += 1;
  },

  extend: {

    score: 0,

    quit: function () {
      this.scene.start('menu', { score: this.score });
    }

  }

};
