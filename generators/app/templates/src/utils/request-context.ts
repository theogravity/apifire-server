import { Request } from 'express'
import { ILogger, IRequestContext } from '../interfaces'
import { getLogger } from './logger'
import { getReqId } from './id'

export class RequestContext implements IRequestContext {
  reqId: string
  logger: ILogger
  req: Request

  constructor (req: Request) {
    this.reqId = getReqId()
    this.logger = getLogger().withData({
      reqId: this.reqId
    })
    this.req = req
  }

  /**
   * Get the req object
   */
  getReq () {
    return this.req
  }

  getLogger () {
    return this.logger
  }

  getReqId (): string {
    return this.reqId
  }
}
