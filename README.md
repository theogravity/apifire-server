# generator-apifire-server 

[![NPM version](http://img.shields.io/npm/v/generator-apifire-server.svg?style=flat-square)](https://www.npmjs.com/package/generator-apifire-server)
![built with typescript](https://camo.githubusercontent.com/92e9f7b1209bab9e3e9cd8cdf62f072a624da461/68747470733a2f2f666c61742e62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565) 


> Generates an express API server written in Typescript with routes/controllers/validation/model/migration generation capabilities. 
> Use an OpenAPI 3 yaml file to generate controllers / routers / validators
> Use a yaml to generate objection.js models and knex migrations

Uses the following libraries:

- [`objection-generator`](https://github.com/theogravity/objection-generator): Generates Typescript objection.js models and knex migrations
- [`new-error`](https://github.com/theogravity/new-error): Used to build an error-handling infrastructure
- [`apifire`](https://github.com/theogravity/apifire): Generates Typescript controllers/routers/validators from an OpenAPI 3 spec.
- [`ajv`](https://ajv.js.org/): Validates API request parameters in routers

See the [`apifire`](https://github.com/theogravity/apifire) for notes on current limitations with using an OpenAPI 3 spec.

The generated project comes with a sample OpenAPI and `objection-generator` spec to quickly get a working server up and running.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-api-server using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-apifire-server
```

Then generate your new project:

```bash
yo apifire-server
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Theo Gravity](https://github.com/theogravity)


[npm-image]: https://badge.fury.io/js/generator-ts-openapi-server.svg
[npm-url]: https://npmjs.org/package/generator-ts-openapi-server
[travis-image]: https://travis-ci.com/theogravity/generator-ts-openapi-server.svg?branch=master
[travis-url]: https://travis-ci.com/theogravity/generator-ts-openapi-server
[daviddm-image]: https://david-dm.org/theogravity/generator-ts-openapi-server.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/theogravity/generator-ts-openapi-server
