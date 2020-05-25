import { nanoid } from 'nanoid'

export function getReqId () {
  return `req-${nanoid()}`
}

export function getErrorId () {
  return `err-${nanoid()}`
}
