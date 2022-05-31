import pino, { P } from 'pino'
import { LogLayer, LoggerType } from 'loglayer'

const p = pino({
  level: 'trace',
});

export function getLogger() {
  return new LogLayer<P.Logger>({
    logger: {
      instance: p,
      type: LoggerType.PINO,
    },
  })
}
