interface ValueObjectProps {
  [index: string]: any
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T

  constructor(props: T) {
    this.props = Object.freeze(props)
  }

  public equals(values?: ValueObject<T>): boolean {
    if (values === null || values === undefined) return false

    if (values.props === undefined) return false

    // is missing to check if props as the same proprieties as this.props
    
    return true
  }
}