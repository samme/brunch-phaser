window.WEBGL_RENDERER = true;
window.CANVAS_RENDERER = false;

require('phaser');

window.game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {

    preload: function preload () {
      this.load.image('logo', 'assets/logo.png');
    },

    create: function create () {
      var logo = this.add.image(400, 150, 'logo');

      this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Quad',
        yoyo: true,
        loop: -1
      });
    }

  }
});
