module.exports = {

  key: 'boot',

  preload: function () {
    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.load.on('progress', this.onLoadProgress, this);
    this.load.on('complete', this.onLoadComplete, this);
    this.createProgressBar();
  },

  create: function () {
    this.registry.set('score', 0);
    this.scene.start('menu');
  },

  extend: {

    progressBar: null,

    progressCompleteRect: null,

    progressRect: null,

    createProgressBar: function () {
      var Rectangle = Phaser.Geom.Rectangle;
      var main = Rectangle.Clone(this.cameras.main);

      this.progressRect = new Rectangle(0, 0, 0.5 * main.width, 50);
      Rectangle.CenterOn(this.progressRect, main.centerX, main.centerY);

      this.progressCompleteRect = Rectangle.Clone(this.progressRect);

      this.progressBar = this.add.graphics();
    },

    onLoadComplete: function (loader, totalComplete, totalFailed) {
      console.debug('complete', totalComplete);
      console.debug('failed', totalFailed);

      this.progressBar.destroy();
    },

    onLoadProgress: function (progress) {
      console.debug('progress', progress);

      var color = this.load.totalFailed ? 0xff2200 : 0xffffff;

      this.progressRect.width = progress * this.progressCompleteRect.width;
      
      this.progressBar
        .clear()
        .fillStyle(0x222222)
        .fillRectShape(this.progressCompleteRect)
        .fillStyle(color)
        .fillRectShape(this.progressRect);
    }

  }

};
