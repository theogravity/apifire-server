import { Request } from 'express'

export interface IRequestContext {
  reqId: string
  logger: ILogger
  req: Request
  getLogger(): ILogger
  getReqId(): string
  getReq(): Request
}
export interface IRequest extends Request {
  context: IRequestContext
}

export interface ILogger {
  getInstance ()
  withData (data: Record<string, any>): this

  info (data: Record<string, any> | string)
  info (msg: string, data: Record<string, any>)

  error (data: Record<string, any> | string)
  error (msg: string, data: Record<string, any>)

  warn (data: Record<string, any> | string)
  warn (msg: string, data: Record<string, any>)

  debug (data: Record<string, any> | string)
  debug (msg: string, data: Record<string, any>)

  fatal (data: Record<string, any> | string)
  fatal (msg: string, data: Record<string, any>)

  trace (data: Record<string, any> | string)
  trace (msg: string, data: Record<string, any>)
}

export interface IProtectEndpointParams {
  /**
   * An array of auth scopes that are required to access the endpoint
   */
  scopes?: Array<string>
}
