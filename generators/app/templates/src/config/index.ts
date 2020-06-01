import { resolve } from 'path'
import { loadStaticConfig, ICerebroConfig } from 'configurity'

let config: ICerebroConfig = null

export async function initConfig () {
  config = loadStaticConfig(resolve(__dirname, 'config.yaml'))
}

export function getConfig (): ICerebroConfig {
  return config
}

export function getDbConfig () {
  return {
    client: config.getAssertValue('db_client'),
    connection: {
      filename: resolve(process.cwd(), config.getAssertValue('db_file'))
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: resolve(__dirname, '..', 'db', 'migrations')
    },
    timezone: 'UTC'
  }
}
