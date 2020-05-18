import { initConfig } from './src/config'
import { migrateDb } from './src/db'

(async () => {
  await initConfig()
  await migrateDb()
  process.exit(0)
})()
