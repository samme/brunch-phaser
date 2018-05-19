var CONST = require('data/const');

module.exports = {

  key: 'default',

  init: function (data) {
    console.debug('init', this.scene.key, data, this);
    
    this.events.once('shutdown', this.shutdown, this);
    
    this.score = 0;
  },

  create: function () {
    this.add.image(400, 300, 'sky');

    var logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    
    this.add.text(10, 580, '(Q) Quit (R) Restart', {
      fill: CONST.colors.yellow,
      fontFamily: CONST.fonts.default,
      fontSize: 16
    });

    this.input.keyboard.once('keydown_Q', this.quit, this);
    this.input.keyboard.once('keydown_R', this.restart, this);
  },

  update: function () {
    this.score += 1;
  },

  extend: {

    score: 0,

    quit: function () {
      this.scene.start('menu');
    },

    restart: function () {
      this.scene.restart();
    },

    shutdown: function () {
      this.registry.set('score', this.score);
    }

  }

};
