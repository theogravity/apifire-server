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

export interface IProtectEndpointParams {
  /**
   * An array of auth scopes that are required to access the endpoint
   */
  scopes?: Array<string>
}
