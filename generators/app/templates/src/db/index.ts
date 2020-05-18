import knex from 'knex'
import { getDbConfig } from '../config'

let db : knex = null

export function getDb () : knex {
  if (!db) {
    const config = getDbConfig()
    db = knex(config)
  }

  return db
}

export async function migrateDb () {
  const db = getDb()
  await db.migrate.latest()
}

