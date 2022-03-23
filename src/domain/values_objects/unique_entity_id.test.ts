import { UniqueEntityID } from "./unique_entity_id"

describe('UniqueEntityID', () => {
  it('Should create a random id', () => {
    const uniqueEntityId = new UniqueEntityID()

    expect(uniqueEntityId.value).toBeDefined()
  })
})