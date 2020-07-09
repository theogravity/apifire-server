# <%= projectName %>

An API server written in Typescript.

# Table of Contents

<!-- TOC -->

<!-- TOC END -->

# Init

Generates the routers/controllers/models/migrations, and copies them to the appropriate directory
if the files do not already exist:

`$ npm run generate:all`

See the below sections for more information.

# API Generation

## Define your API

Edit the `openapi.yaml` file with your OpenAPI 3 definitions.

## Generate the scaffolding

`$ npm run generate:server`

This takes the `openapi.yaml` file and uses the `apifire` library to generate
routing, controllers, and validation files:

```
/<service root>
├── src/
|   ├── controllers-generated/
|   |   └──  <operation>.ts
|   ├── interfaces/
|   |   └──  api.ts
|   ├── routers/
|   |   ├── <operation>.router.ts
|   |   ├── validators/
|   |   |   └── <operation>.validator.ts
```

## Create controllers

Rename the `controllers-generated` directory to `controllers`. These will be the initial
set of controllers used to implement your business logic for processing an API route.

## Implement routing

Edit the `app.ts` file, and import the routers, like so:

```typescript
import xRouter from './routers/x.router'

...

// Add routes here
app.use('/', xRouter)

...
```

## Update scaffolding

When you make changes to `openapi.yaml`, run the generation command again to update
your routers. Pluck out what you need from `controllers-generated/` into your `controllers/`
directory.

# Database modeling

Files will be generated in `<projectRoot>/generated` as to not overwrite existing files.

## Define your model / schema

Edit the `database.yaml` file to define your model and knex schema.
 
See [`objection-generator`](https://github.com/theogravity/objection-generator) for more information
on how the schema works.

## Generate the scaffolding

### Generate the objection.js models

`$ npm run generate:models`

The objection.js models are created in `<projectRoot>/generated/models`.

- The files should go in `<projectRoot>/generated/models/` to `<projectRoot>/src/db/models`

### Generate the knex migration file

`$ npm run generate:migration`

The knex migration is created in `<projectRoot>/generated/migrations`.

- The files should go in `<projectRoot>/generated/migrations/` to `<projectRoot>/src/db/migrations`
- Ignore the generated `migration.js` file

#### Execute database migration

The migration settings are in `<projectRoot>/src/config/index.ts` and is by default set to use sqlite as the database.

Run the migrations to create the database scaffolding.

`$ npm run db:migrate`

# Start the server

`$ npm run start:dev`

# Run in docker

If you want to run the service in docker, do `./run-docker.sh` and follow the instructions.
