import knex from 'knex'

export class BaseStore {
  db: knex

  constructor (db: knex) {
    this.db = db
  }
}
