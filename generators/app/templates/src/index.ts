import express from 'express'
import http from 'http'
import { getConfig, initConfig } from './config'
import { initApp } from './app'

(async () => {
  await initConfig()
  const config = getConfig()
  const app = express()
  await initApp(app)

  const port = config.getAssertValue('service_port')

  http.createServer(app).listen(port, () => {
    console.log(`API server started on port ${port}`)
  })
})()
