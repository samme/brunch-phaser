module.exports = {

  init: function (data) {
    console.log('init', data, this);
  },

  preload: function () {
    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.load.image('red', 'red.png');
    this.load.on('progress', this.onLoadProgress, this);
    this.load.on('complete', this.onLoadComplete, this);
    this.createProgressBar();
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
  },

  extend: {

    progressBar: null,

    progressBarRectangle: null,

    createProgressBar: function () {
      var main = this.cameras.main;
      this.progressBarRectangle = new Phaser.Geom.Rectangle(0, 0, 0.5 * main.width, 50);
      Phaser.Geom.Rectangle.CenterOn(this.progressBarRectangle, 0.5 * main.width, 0.5 * main.height);
      this.progressBar = this.add.graphics();
    },

    onLoadComplete: function (loader) {
      console.log('onLoadComplete', loader);
      this.progressBar.destroy();
    },

    onLoadProgress: function (progress) {
      var rect = this.progressBarRectangle;
      var color = (this.load.failed.size > 0) ? (0xff2200) : (0xffffff);
      this.progressBar
        .clear()
        .fillStyle(0x222222)
        .fillRect(rect.x, rect.y, rect.width, rect.height)
        .fillStyle(color)
        .fillRect(rect.x, rect.y, progress * rect.width, rect.height);
      console.log('progress', progress);
    }

  }

};
