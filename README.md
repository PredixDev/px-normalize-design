# Normalize

The Predix Experience Normalize module is based on normalize.css at version v3.0.2. normalize.css <q>makes browsers render all elements more consistently and in line with modern standards</q>. It is developed and maintained by [Nicolas Gallagher](https://twitter.com/necolas).

## Dependencies

Px's Normalize module depends on one other Px module:

* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Upstream dependency

The normalize module is also an upstream dependency in this meta kit:

* [px-starter-kit-design](https://github.sw.ge.com/pxc/px-starter-kit-design)

## Installation

Install this module and its dependencies using bower

    bower install --save https://github.sw.ge.com/pxc/px-normalize-design.git

Once installed, `@import` into your project's Sass file in its Generic layer:

    @import "px-normalize-design/sass/generic.normalize";

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('generic.normalize') { ... }

## Credits

* Project homepage: [necolas.github.io/normalize.css](http://necolas.github.io/normalize.css/)
* GitHub repo: [github.com/necolas/normalize.css](https://github.com/necolas/normalize.css/)
