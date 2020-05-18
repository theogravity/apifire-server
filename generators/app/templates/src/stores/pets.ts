import { BaseStore } from './base-store'
import { PetModel } from '../db/models/PetModel'

/**
 * Sample pet stores based off the default
 * database.yaml and openapi.yaml definitions
 */
export class PetsStore extends BaseStore {
  async getPets () {
    return PetModel.query(this.db)
  }

  async getPetsById (id: string) {
    return PetModel.query(this.db).findById(id)
  }
}
