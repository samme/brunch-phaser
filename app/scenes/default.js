module.exports = {

  key: 'default',

  init: function (data) {
    console.debug('init', this.scene.key, data, this);
    
    this.events.once('shutdown', this.shutdown, this);
  },

  create: function () {
    this.add.image(400, 300, 'sky');

    var logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    this.input.keyboard.once('keydown_Q', this.quit, this);
  },

  update: function () {
    this.score += 1;
  },

  extend: {

    score: 0,

    quit: function () {
      this.scene.start('menu', { score: this.score });
    },

    shutdown: function () {
      this.registry.set('score', this.score);
    }

  }

};
