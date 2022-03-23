import { UniqueEntityID } from "../values_objects/unique_entity_id"
import { Entity } from "./entity"

interface IUserProps {
  name: string
  email: string
  active: boolean
}
export class User extends Entity<IUserProps>{
  get name(): string {
    return this.props.name
  }
  get email(): string {
    return this.props.email
  }

  private constructor(props: IUserProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static createUser(props: IUserProps, id?: UniqueEntityID) {

  }
}


