import { ValueObject } from "./value_object";

interface UniqueEntityIDProps {
  value: string
}

export class UniqueEntityID extends ValueObject<UniqueEntityIDProps> {

  get value(): string {
    return this.props.value
  }
  constructor() {
    super({ value: `${Date.now()}` })
  }
}