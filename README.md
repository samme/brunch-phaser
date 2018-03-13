Brunch with Phaser 3
====================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser 3](http://phaser.io/phaser3). ([Why Brunch?](http://brunch.io/docs/why-brunch))

    brunch new <project> -s phaser

Or choose one of these variants:

### CoffeeScript

[brunch-phaser-coffee](https://github.com/samme/brunch-phaser-coffee)

    brunch new <project> -s samme/brunch-phaser-coffee

### ES6

[brunch-phaser-es6](https://github.com/samme/brunch-phaser-es6)

    brunch new <project> -s samme/brunch-phaser-es6

### TypeScript

[brunch-phaser-typescript](https://github.com/samme/brunch-phaser-typescript)

    brunch new <project> -s samme/brunch-phaser-typescript

### Phaser 2 (CE)

Please see [brunch-phaser2](https://github.com/samme/brunch-phaser2).

Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `brunch new <project> -s phaser`
  - `npm run start` or `brunch watch --server` watches the project with continuous rebuild.
  - `npm run build` or `brunch build --production` builds a minified project for production.
- Make:
  - Write your code in [app](app).
  - Put game assets in [assets](app/static/assets).

### Save

You can make your own local skeleton (template):

```shell
git clone https://github.com/samme/brunch-phaser.git brunch-phaser
cd brunch-phaser
# If you make changes, commit them to master:
git commit # etc.
```

Now use it with `brunch new`:

```shell
brunch new <project> -s ./path/to/brunch-phaser
```

Phaser
------

Phaser is managed through [npm](https://docs.npmjs.com/cli/npm).

    npm ls --production

Update with:

    npm update

### Other builds

See the `npm.static` entry in [brunch-config](./brunch-config.coffee).

Add packages
------------

    npm install -S <package-name>

and in your code:

```javascript
require('package-name');
```

Add other libraries
-------------------

Add the unminified script to [vendor](vendor).

Plugins
-------

```shell
# List
npm list --dev --depth=0

# Add (http://brunch.io/plugins)
npm install -D plugin-name
```

### Settings

- [uglify-js-brunch](https://www.npmjs.com/package/uglify-js-brunch#usage)
  - [minify options](https://www.npmjs.com/package/uglify-js#minify-options)

[1]: http://coffeescript.org
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla
[3]: https://www.typescriptlang.org
