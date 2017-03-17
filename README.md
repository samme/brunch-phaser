Brunch with Phaser
==================

A [Brunch](http://brunch.io) skeleton for making games with [Phaser](http://phaser.io).

You can use CoffeeScript, ES6, TypeScript, or plain JavaScript.

    brunch new <project> -s samme/brunch-phaser

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

Phaser is managed through NPM. Update with:

    npm update

If you want to switch libraries:

    npm remove -S phaser-ce && npm install -S phaser

Add NPM packages
----------------

    npm install -S <package>

and `require('<package>')` in your code.

Add bower packages
------------------

    bower install -S <package>

Add other libraries
-------------------

Add the unminified script to [vendor](vendor).

Make a texture atlas
--------------------

[Install glue](http://glue.readthedocs.io/en/latest/installation.html), then

    npm run glue

or

    npm run glue-watch

Configure glue in [sprite.conf](app/static/assets/sprite.conf).
