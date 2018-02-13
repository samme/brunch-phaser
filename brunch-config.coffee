# http://brunch.io/docs/config
module.exports =
  conventions:
    assets: 'app/static/**'
  files:
    javascripts:
      joinTo:
        'app.js': 'app/**'
        'vendor.js': ['node_modules/**', 'vendor/**']
    stylesheets:
      joinTo: 'app.css'
  modules:
    autoRequire:
      'app.js': ['initialize']
  npm:
    static: [
      'node_modules/phaser/dist/phaser.js'
      # 'node_modules/phaser/dist/phaser-arcade-physics.js'
    ]
  plugins:
    # https://github.com/babel/babel-brunch#configuration
    babel:
      ignore: ['node_modules/**', 'vendor/**']
    off: [
      # You can turn these plugins off if you're not using them
      # 'babel-brunch'
      # 'brunch-typescript'
      # 'coffee-script-brunch'
    ]
  server:
    noPushState: on
