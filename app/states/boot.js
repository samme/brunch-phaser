module.exports = {

  init: function () {
    this.input.maxPointers = 1;
    this.game.renderer.renderSession.roundPixels = true;
    this.tweens.frameBased = true;

    this.bar = this.add.text(this.world.centerX, this.world.centerY, '..........', {
      fill: 'white', font: '32px monospace'
    });
    this.bar.anchor.set(0.5);
  },

  preload: function () {
    this.load.setPreloadSprite(this.bar);
    this.load.image('carrot', 'assets/carrot.png');
    this.load.spritesheet('duck', 'assets/chick.png', 16, 18);
  },

  create: function () {
    this.state.start('menu');
  }

};
