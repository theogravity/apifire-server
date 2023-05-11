import { RequestContext } from '../utils/request-context'
import { IRequest, IResponse } from '../interfaces';

export function requestContextMiddleware () {
  return (req: IRequest, res: IResponse, next) => {
    res.apifire = {
      disableAutoSend: false,
    }
    req.context = new RequestContext(req, res)
    req.context.logger.info(`Request ${req.method} ${req.path} id: ${req.context.getReqId()}`)
    next()
  }
}
