import { BaseError } from 'new-error'
import { getErrRegistry } from '../core/errors'
import { IRequest } from '../interfaces'
import { getErrorId } from '../core/id'

export function handleErrorMiddleware() {
  return (err, req: IRequest, res, next) => {
    const errs = getErrRegistry()

    if (err && err instanceof BaseError) {
      err.withErrorId(getErrorId())

      switch (err.getErrorType()) {
        case 'INVALID_REQ_PARAMS':
          // don't really care
          break
        default:
          req.context.logger.error({
            reqId: req.context.getReqId(),
            err: err.toJSON()
          })
      }

      res.status(err.getStatusCode() ?? 500)
      return res.json({
        reqId: req.context.getReqId(),
        err: err.toJSONSafe()
      })
    } else if (err) {
      res.status(500)
      return res.json({
        err: errs.newError('INTERNAL_SERVER_ERROR', 'UNCATEGORIZED')
          .causedBy(err)
          .toJSONSafe()
      })
    }

    next()
  }
}
