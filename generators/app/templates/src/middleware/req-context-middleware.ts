import { RequestContext } from '../utils/request-context'
import { IRequest } from '../interfaces'

export function requestContextMiddleware () {
  return (req: IRequest, res, next) => {
    req.context = new RequestContext()
    req.context.logger.info(`Request ${req.path} id: ${req.context.getReqId()}`)
    next()
  }
}
