import { StructuredLogger } from './structured-logger'

const logger = require('pino')()

export function getLogger () {
  return new StructuredLogger(logger)
}
