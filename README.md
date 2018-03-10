Brunch with Phaser 3
====================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser 3](http://phaser.io/phaser3). ([Why Brunch?](http://brunch.io/docs/why-brunch))

You can use [CoffeeScript][1], [ES6][2], [TypeScript][3], or plain JavaScript.

    brunch new <project> -s phaser

(For Phaser 2 [CE], please see [brunch-phaser2](https://github.com/samme/brunch-phaser2).)

Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `brunch new <project> -s phaser` **or** see [Clone](#clone), below.
  - `npm run start` or `brunch watch --server` watches the project with continuous rebuild.
  - `npm run build` or `brunch build --production` builds a minified project for production.
- Make:
  - Write your code in [app](app).
  - Put game assets in [assets](app/static/assets).

### Clone

If you'd like to start with a sample written in CoffeeScript, ES6, or TypeScript, create your new project by cloning this repository instead:

```shell
# Choose one:
git clone https://github.com/samme/brunch-phaser.git --branch coffee
git clone https://github.com/samme/brunch-phaser.git --branch es6
```

I'll update the [typescript](https://github.com/samme/brunch-phaser/tree/typescript) branch when the Phaser 3 type definitions are published.

When these branches are mature I'll split them into separate skeletons so you can choose one with `brunch new …` instead of by cloning.

### Save

You can make your own local skeleton:

```shell
# Choose a BRANCH (or use master)
git clone https://github.com/samme/brunch-phaser.git brunch-phaser --branch BRANCH
cd brunch-phaser
# If you used a non-master branch, merge it into master:
git merge BRANCH
# If you make changes, commit them to master:
git commit # etc.
```

```shell
# Now you can use your own skeleton:
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

# Remove, e.g.,
npm uninstall -D babel-brunch brunch-typescript coffee-script-brunch
```

### Settings

- [babel-brunch](https://www.npmjs.com/package/babel-brunch#configuration)
- [coffee-script-brunch](https://www.npmjs.com/package/coffee-script-brunch#configuration)
- [typescript-brunch](https://www.npmjs.com/package/typescript-brunch#brunch-config)
- [uglify-js-brunch](https://www.npmjs.com/package/uglify-js-brunch#usage)
  - [minify options](https://www.npmjs.com/package/uglify-js#minify-options)

[1]: http://coffeescript.org
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla
[3]: https://www.typescriptlang.org
