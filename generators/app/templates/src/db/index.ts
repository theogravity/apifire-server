import { knex, Knex } from 'knex'
import { getDbConfig } from '../config'

let db : Knex = null

export function getDb () : Knex {
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

