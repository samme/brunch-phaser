Brunch with Phaser 3
====================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser 3](http://phaser.io/phaser3). ([Why brunch?](http://brunch.io/docs/why-brunch))

You can use CoffeeScript, ES6, TypeScript, or plain JavaScript.

    brunch new <project> -s phaser

Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `brunch new <project> -s samme/brunch-phaser`
  - `npm run start` or `brunch watch --server` watches the project with continuous rebuild.
  - `npm run build` or `brunch build --production` builds minified project for production.
- Make:
  - Write your code in [app](app).
  - Put game assets in [assets](app/static/assets).

Phaser
------

Phaser is managed through NPM.

    npm ls --production

Update with:

    npm update

### Other builds

See the `npm.static` entry in [brunch-config](./brunch-config.coffee).

### Phaser 2 (CE)

Instead of `brunch new`, run:

```shell
git clone https://github.com/samme/brunch-phaser.git project --branch phaser2
```

Add NPM packages
----------------

    npm install -S <package>

and `require('<package>')` in your code.

Add other libraries
-------------------

Add the unminified script to [vendor](vendor).

Plugins
-------

[Brunch has many](http://brunch.io/plugins).

```shell
# List
npm list --dev --depth=0

# Add
npm install -D plugin-name

# Remove, e.g.,
npm uninstall -D babel-brunch brunch-typescript coffee-script-brunch
```
