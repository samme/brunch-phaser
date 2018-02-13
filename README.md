Brunch with Phaser 3
====================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser 3](http://phaser.io/phaser3).

Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `git clone https://github.com/samme/brunch-phaser.git --branch phaser3`
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
