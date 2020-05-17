import { nanoid } from 'nanoid'

export function getErrorId () {
  return `err-${nanoid()}`
}
