import { resolve } from 'path'

let config : any = {}

export async function initConfig () {
  config = {
    // config for this service
    service: {
      port: 3000
    },
    // knex configuration
    db: {
      client: 'sqlite3',
      connection: {
        filename: resolve(process.cwd(), 'sample.db')
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: resolve(__dirname, '..', 'db', 'migrations')
      },
      timezone: 'UTC'
    }
  }
}

export function getDbConfig () {
  return config.db
}

export function getConfig() : any {
  return config
}
