import { Name } from "./name"

describe('Test Name value object', () => {
  it('Should create a name', () => {
    let name = new Name({value: 'Joel Mbengui'});

    expect(name.value).toBe('Joel Mbengui')
  })
})