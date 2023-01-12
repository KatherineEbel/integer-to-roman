import {divmod} from './helpers'

describe('divmod', function () {
  it('should return [3, 0] given 300, 100', function () {
    const result = divmod(300, 100)
    expect(result).toEqual([3, 0])
  })

  it('should return [3, 0] given 300, 100', function () {
    const result = divmod(300, 200)
    expect(result).toEqual([1, 100])
  })

  it('should return [3, 0] given 300, 100', function () {
    const result = divmod(8, 2)
    expect(result).toEqual([4, 0])
  })

  it('should return [1, 0] given 5, 5', function () {
    const result = divmod(5, 5)
    expect(result).toEqual([1, 0])
  })

  it('should return [2, 2] given 8, 3', function () {
    const result = divmod(8, 3)
    expect(result).toEqual([2, 2])
  })

  it('should return [0, 3] given 3, 8', function () {
    const result = divmod(3, 8)
    expect(result).toEqual([0, 3])
  })
})