module.exports = {

  init: function () {
    this.input.maxPointers = 1;
    this.game.renderer.renderSession.roundPixels = true;
    this.tweens.frameBased = true;

    this.whitePixel = this.add.bitmapData(1, 1);
    this.whitePixel.fill(255, 255, 255);
    
    this.bar = this.whitePixel.addToWorld();
    this.bar.width = 100;
    this.bar.height = 10;
    this.bar.alignIn(this.world.bounds, Phaser.CENTER);
  },

  preload: function () {
    this.load.setPreloadSprite(this.bar);
    this.load.image('carrot', 'assets/carrot.png');
    this.load.spritesheet('duck', 'assets/chick.png', 16, 18);
  },

  create: function () {
    this.state.start('menu');
  },
  
  shutdown: function () {
    this.whitePixel.destroy();
    this.whitePixel = null;
  }

};
