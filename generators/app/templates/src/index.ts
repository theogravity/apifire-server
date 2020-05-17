import express from 'express'
import http from 'http'
import { initApp } from './app'

(async () => {
  const app = express()
  await initApp(app)
  http.createServer(app).listen(3000)
})()
