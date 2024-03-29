import { BaseError } from 'new-error'
import { getErrRegistry } from '../utils/errors'
import { IRequest, IResponse } from '../interfaces';
import { getErrorId } from '../utils/id'

export function handleErrorMiddleware() {
  return (err, req: IRequest, res: IResponse, next) => {
    const errs = getErrRegistry()

    if (err && err instanceof BaseError) {
      err.withErrorId(getErrorId())

      switch (err.getErrorType()) {
        case 'INVALID_REQ_PARAMS':
          // don't really care, don't log
          break
        default:
          // log the error for internal purposes
          req.context.logger.error(err.toJSON())
      }

      res.status(err.getStatusCode() ?? 500)
      return res.json({
        reqId: req.context.getReqId(),
        err: err.toJSONSafe()
      })
    } else if (err) {
      const newErr = errs.newError('INTERNAL_SERVER_ERROR', 'UNCATEGORIZED')
        .withErrorId(err.errId)

      res.status(500)

      req.context.logger.error({
        err
      })

      return res.json({
        reqId: req.context.getReqId(),
        err: newErr.toJSONSafe()
      })
    }

    next()
  }
}
