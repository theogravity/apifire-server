import express from 'express'
import http from 'http'
import { getConfig, initConfig } from './config'
import { initApp } from './app'

(async () => {
  await initConfig()
  const config = getConfig()
  const app = express()
  await initApp(app)
  http.createServer(app).listen(config.service.port, () => {
    console.log(`API server started on port ${config.service.port}`)
  })
})()
