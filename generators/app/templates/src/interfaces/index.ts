import { Request, Response } from 'express'

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

export interface ApiFireResponseOpts {
  /**
   * If enabled, will not perform res.send automatically
   * and leaves the controller to handle it instead
   */
  disableAutoSend: boolean
}

export interface IResponse extends Response {
  apifire?: ApiFireResponseOpts
}

export interface IProtectEndpointParams {
  /**
   * An array of auth scopes that are required to access the endpoint
   */
  scopes?: Array<string>
}
