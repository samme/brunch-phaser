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
