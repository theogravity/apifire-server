import cors from 'cors'
import { Application } from 'express'
import { json } from 'body-parser'
import { requestContextMiddleware } from './middleware/req-context-middleware'
import { handleErrorMiddleware } from './middleware/handle-err-middleware'
import accountRouter from './routers/account.router'
// import personaRouter from './routers/persona.router'
// import thoughtRouter from './routers/thoughts.router'

export async function initApp (app: Application) {
  app.use(json({
    strict: true
  }))

  app.use(
    cors({
      preflightContinue: true,
      credentials: true
    })
  )

  app.use(requestContextMiddleware())

  // Add routes here
  app.use('/account', accountRouter)
  // app.use('/persona', personaRouter)
  // app.use('/thoughts', thoughtRouter)

  // this needs to be the last item in the chain to catch errors
  app.use(handleErrorMiddleware())
}
