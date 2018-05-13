var FONT = 'Futura,system-ui,sans-serif';

module.exports = {

  key: 'menu',

  init: function (data) {
    console.debug('init', this.scene.key, data, this);
  },

  create: function () {
    this.add.image(400, 300, 'sky')
      .setAlpha(0.25);

    this.add.text(400, 300, 'START', {
      fill: 'white',
      fontFamily: FONT,
      fontSize: 48
    })
      .setOrigin(0.5)
      .setShadow(0, 1, '#62F6FF', 10);

    this.add.text(400, 450, 'Last Score: ' + this.registry.get('score'), {
      fill: '#FED141',
      fontFamily: FONT,
      fontSize: 24
    })
      .setOrigin(0.5)
      .setShadow(0, 1, 'black', 5);

    this.input.once('pointerup', this.start, this);
  },

  extend: {

    start: function () {
      this.scene.start('default');
    }

  }

};
