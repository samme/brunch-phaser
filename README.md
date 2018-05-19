Brunch with Phaser 3
====================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser 3](http://phaser.io/phaser3). ([Why Brunch?](http://brunch.io/docs/why-brunch))

    brunch new <project> -s phaser

Or choose one of these variants:

- [brunch-phaser-coffee](https://github.com/samme/brunch-phaser-coffee "Brunch with Phaser 3 and CoffeeScript")
- [brunch-phaser-es6](https://github.com/samme/brunch-phaser-es6 "Brunch with Phaser 3 and ES6")
- [brunch-phaser-typescript](https://github.com/samme/brunch-phaser-typescript "Brunch with Phaser 3 and TypeScript")
- [brunch-phaser2](https://github.com/samme/brunch-phaser2 "Brunch with Phaser CE")

Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `brunch new <project> -s phaser`
  - `npm run start` or `brunch watch --server` watches the project with continuous rebuild.
  - `npm run build` or `brunch build --production` builds a minified project for production.
  - [trouble?](http://brunch.io/docs/troubleshooting)
- Make:
  - Write your code in [app](app).
  - Put game assets in [assets](app/static/assets).

Phaser
------

Phaser is managed through [npm](https://docs.npmjs.com/cli/npm). The latest release is installed when you create a new project.

    npm view phaser version

You can install a specific version instead:

    npm install -S phaser@3.7

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

Configuration
-------------

- [brunch](http://brunch.io/docs/config)
- [uglify-js-brunch](https://www.npmjs.com/package/uglify-js-brunch#usage)
  - [minify options](https://www.npmjs.com/package/uglify-js#minify-options)

Save
----

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
