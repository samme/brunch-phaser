var CONST = require('data/const');

module.exports = {

  key: 'menu',

  init: function (data) {
    console.debug('init', this.scene.key, data, this);
  },

  create: function () {
    this.add.image(400, 300, 'sky')
      .setAlpha(0.5);

    this.add.text(400, 300, 'START', {
      fill: 'white',
      fontFamily: CONST.fonts.default,
      fontSize: 48
    })
      .setOrigin(0.5)
      .setShadow(0, 1, CONST.colors.aqua, 10);

    this.add.text(400, 450, 'Last Score: ' + this.registry.get('score'), {
      fill: CONST.colors.yellow,
      fontFamily: CONST.fonts.default,
      fontSize: 24
    })
      .setOrigin(0.5)
      .setShadow(0, 1, 'black', 5);

    this.input.once('pointerdown', this.start, this);
  },

  extend: {

    start: function () {
      this.scene.start('default');
    }

  }

};
