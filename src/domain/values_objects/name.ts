import { ValueObject } from "./value_object";

interface NameProps {
  value: string
}

export class Name extends ValueObject<NameProps> {

  get value(): string {
    return this.props.value
  }

  constructor(props: NameProps) {
    super(props)
  }

  public static create(name: string): Name {
    if (
      name === undefined ||
      name === null ||
      name.length <= 2 ||
      name.length > 100
    ) throw new Error('User name must be greater than 2 chars and less than 100.')

    return new Name({ value: name })
  }
}