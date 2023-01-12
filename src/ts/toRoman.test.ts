import {toRoman} from './toRoman'

describe('toRoman', function () {
  it('returns V for given 5', () => {
    const actual = toRoman(4);
    expect(actual).toBe('IV')
  })

  it('returns V for given 5', () => {
    const actual = toRoman(5);
    expect(actual).toBe('V')
  })

  it('returns CCCLV given 355', function () {
    const actual = toRoman(355);
    expect(actual).toBe('CCCLV')
  })

  it('returns XXVII given 28', function () {
    const actual = toRoman(28);
    expect(actual).toBe('XXVIII')
  })

  it('returns XXVII given 28', function () {
    const actual = toRoman(28);
    expect(actual).toBe('XXVIII')
  })

  it('returns LXXXIX given 89', function () {
    const actual = toRoman(89);
    expect(actual).toBe('LXXXIX')
  })

  it('returns CMXCIX given 999', () => {
    const actual = toRoman(999);
    expect(actual).toBe('CMXCIX')
  })

})