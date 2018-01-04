var game = window.GAME = new Phaser.Game({
  // See <https://photonstorm.github.io/phaser-ce/global.html#GameConfig>
  // antialias:               true,
  // backgroundColor:         0x000000,
  // disableVisibilityChange: false,
  // enableDebug:             true,
  // height:                  600,
  // renderer:                Phaser.AUTO,
  // resolution:              1,
  // scaleMode:               Phaser.ScaleManager.NO_SCALE,
  // transparent:             false,
  // width:                   800,
});

game.state.add('boot', require('states/boot'));
game.state.add('game', require('states/game'));
game.state.add('menu', require('states/menu'));

game.state.start('boot');
