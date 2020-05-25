import { ILogger, IRequestContext } from '../interfaces'
import { getLogger } from './logger'
import { getReqId } from './id'

export class RequestContext implements IRequestContext {
  reqId: string
  logger: ILogger

  constructor () {
    this.reqId = getReqId()
    this.logger = getLogger().withData({
      reqId: this.reqId
    })
  }

  getLogger () {
    return this.logger
  }

  getReqId (): string {
    return this.reqId
  }
}
