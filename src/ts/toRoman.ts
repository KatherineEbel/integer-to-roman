import {divmod} from './helpers'

const ROMAN_NUMERALS = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

/**
 * @param {number} num
 * @return {string}
 */
export const toRoman = (num: number): string => {
  return Object.keys(ROMAN_NUMERALS).sort((a, b) => Number(b) - Number(a)).map(key => {
    const curr = Number(key)
    if (curr > num) {
      return '';
    }
    const [count, n] = divmod(num, curr)
    num = n
    return ROMAN_NUMERALS[key].repeat(count)
  })
    .join('')
};
