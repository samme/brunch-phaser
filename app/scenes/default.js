module.exports = {

  init: function () {
    console.log('init', this);
  },

  preload: function () {
    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.load.image('red', 'red.png');
    this.progressBar = this.add.graphics(0, 0);
    this.load.on('progress', this.onLoadProgress, this);
    this.load.on('complete', this.onLoadComplete, this);
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

    onLoadComplete: function () { // (loader, storageSize, failedSize)
      console.log('onLoadComplete');
      this.progressBar.destroy();
    },

    onLoadProgress: function (progress) {
      this.progressBar
        .clear()
        .fillStyle(0xffffff, 0.75)
        .fillRect(0, 0, 800 * progress, 50);
      console.log('progress', progress);
    }

  }

};
