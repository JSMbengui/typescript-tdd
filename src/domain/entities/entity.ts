import { UniqueEntityID } from "../values_objects/unique_entity_id";

const isEntity = (value: any): value is Entity<any> => {
  return value instanceof Entity
}

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityID
  protected props: T

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id ? id : new UniqueEntityID()
    this.props = props
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!isEntity(object)) {
      return false
    }

    return this._id.equals(object._id)
  }
}