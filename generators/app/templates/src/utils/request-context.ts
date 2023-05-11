import { Request } from 'express'
import { LogLayer } from 'loglayer'
import { IRequest, IRequestContext, IResponse } from "../interfaces";
import { getLogger } from './logger'
import { getReqId } from './id'

export class RequestContext implements IRequestContext {
  reqId: string
  logger: LogLayer
  req: IRequest
  res: IResponse

  constructor (req: IRequest, res: IResponse) {
    this.reqId = getReqId()
    this.logger = getLogger().withContext({
      reqId: this.reqId
    })

    this.req = req
    this.res = res
  }

  getLogger () {
    return this.logger
  }

  getReqId (): string {
    return this.reqId
  }
}
