import { Application } from 'express'
import { json } from 'body-parser'
import { requestContextMiddleware } from './middleware/req-context-middleware'
import { handleErrorMiddleware } from './middleware/handle-err-middleware'

export async function initApp (app: Application) {
  app.use(json({
    strict: true
  }))

  app.use(requestContextMiddleware())

  // Add routes here

  // this needs to be the last item in the chain to catch errors
  app.use(handleErrorMiddleware())
}
