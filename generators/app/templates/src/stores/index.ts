import { PetsStore } from './pets'
import { getDb } from '../db'

// A store is used to access external services
// such as a db server, or API server
let stores = null

export function initStores () {
  stores = {
    petsStore: new PetsStore(getDb())
  }
}

export function getStores () {
  if (!stores) {
    initStores()
  }

  return stores
}
