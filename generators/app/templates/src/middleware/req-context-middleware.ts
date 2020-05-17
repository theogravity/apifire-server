import { RequestContext } from '../core/request-context'
import { IRequest } from '../interfaces'

export function requestContextMiddleware () {
  return (req: IRequest, res, next) => {
    req.context = new RequestContext()
    req.context.logger.info(`Request started: ${req.context.getReqId()}`)
    next()
  }
}
