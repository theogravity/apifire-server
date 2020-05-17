import { nanoid } from 'nanoid'

import { ILogger, IRequestContext } from '../interfaces'
import { getLogger } from './logger'

export class RequestContext implements IRequestContext {
  reqId: string
  logger: ILogger

  constructor () {
    this.reqId = nanoid()
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
