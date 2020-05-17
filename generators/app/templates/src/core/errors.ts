import { ErrorRegistry } from 'new-error'

const errors = {
  INTERNAL_SERVER_ERROR: {
    className: 'InternalServerError',
    code: 'INTERNAL_ERR',
    statusCode: 400
  },
  VALIDATION_FAILURE: {
    className: 'ValidationFailure',
    code: 'VALIDATION_FAILURE',
    statusCode: 400
  }
}

const errorCodes = {
  INVALID_REQ_PARAMS: {
    message: 'Request parameters failed validation',
    subCode: 'REQ_VALIDATION',
    statusCode: 400
  },
  UNCATEGORIZED: {
    message: 'An internal server error has occured',
    subCode: 'UNCATEGORIZED',
    statusCode: 500
  }
}
const errRegistry = new ErrorRegistry(errors, errorCodes)

export function getErrRegistry() {
  return errRegistry
}
