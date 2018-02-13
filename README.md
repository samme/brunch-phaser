Brunch with Phaser 3
====================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser](http://phaser.io).

You can use CoffeeScript, ES6, TypeScript, or plain JavaScript.

    brunch new <project> -s phaser

Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `brunch new <project> -s samme/brunch-phaser` (or see [Clone](#clone), below)
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


Add NPM packages
----------------

    npm install -S <package>

and `require('<package>')` in your code.

Add other libraries
-------------------

Add the unminified script to [vendor](vendor).
