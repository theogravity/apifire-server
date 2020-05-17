import { ILogger } from '../interfaces'

export class StructuredLogger implements ILogger {
  protected logger
  protected data : Record<string, any>

  constructor (logger) {
    this.logger = logger
    this.data = {}
  }

  withData (data: Record<string, any> = {}) {
    this.data = {
      ...this.data,
      ...data
    }

    return this
  }

  getInstance() {
    return this.logger
  }

  info (msg: string | Record<string, any>, data: Record<string, any> = {}) {
    if (typeof msg === 'string') {
      return this.logger.info({
        msg,
        data: {
          ...this.data,
          ...data
        }
      })
    }

    this.logger.info({
      ...this.data,
      ...data
    })
  }
  error (msg: string | Record<string, any>, data?: Record<string, any>) {
    if (typeof msg === 'string') {
      return this.logger.error({
        msg,
        data: {
          ...this.data,
          ...data
        }
      })
    }

    this.logger.error({
      ...this.data,
      ...data
    })
  }

  warn (msg: string | Record<string, any>, data?: Record<string, any>) {
    if (typeof msg === 'string') {
      return this.logger.warn({
        msg,
        data: {
          ...this.data,
          ...data
        }
      })
    }

    this.logger.warn({
      ...this.data,
      ...data
    })
  }

  debug (msg: string | Record<string, any>, data?: Record<string, any>) {
    if (typeof msg === 'string') {
      return this.logger.debug({
        msg,
        data: {
          ...this.data,
          ...data
        }
      })
    }

    this.logger.debug({
      ...this.data,
      ...data
    })
  }

  fatal (msg: string | Record<string, any>, data?: Record<string, any>) {
    if (typeof msg === 'string') {
      return this.logger.fatal({
        msg,
        data: {
          ...this.data,
          ...data
        }
      })
    }

    this.logger.fatal({
      ...this.data,
      ...data
    })
  }

  trace (msg: string | Record<string, any>, data?: Record<string, any>) {
    if (typeof msg === 'string') {
      return this.logger.trace({
        msg,
        data: {
          ...this.data,
          ...data
        }
      })
    }

    this.logger.trace({
      ...this.data,
      ...data
    })
  }
}
