import { PetModel } from '../db/models/PetModel'
import { getDb } from '../db'

/**
 * Sample pet stores based off the default
 * database.yaml and openapi.yaml definitions
 */

export async function getPets () {
  return PetModel.query(getDb())
}

export async function getPetsById (id: string) {
  return PetModel.query(getDb()).findById(id)
}
