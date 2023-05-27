// put it in terminal -> 51b66044bce5799a7f000003
class RomanNumerals {
  static toRoman(num = 0) {
    const romans = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    }

    let numList = num.toString().split('').reverse().map((n, index) => { return { n: parseInt(n), t: (10 ** index) } }).reverse()
    let romanStr = ''
    numList.forEach(obj => {
      if (obj.n > 0 && obj.n < 4) {
        for (let i = 0; i < obj.n; i++) {
          romanStr += romans[obj.t]
        }
      } else if (obj.n > 5 && obj.n < 9) {
        romanStr += romans[5 * obj.t]
        for (let i = 0; i < obj.n - 5; i++) {
          romanStr += romans[obj.t]
        }
      } else if (obj.n === 4 || obj.n === 5 || obj.n === 9) {
        romanStr += romans[obj.n * obj.t]
      }
    })
    return romanStr
  }

  static fromRoman(str = '') {
    const normal = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    const dif = {
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900,
    }
    
    let result = 0
    let filter = Object.keys(dif).filter(key => str.includes(key))
    while (filter.some(o => str.includes(o))) {
      let roman = filter.pop()
      result += dif[roman]
      str = str.replace(roman, '')
    }
    str.split('').forEach(o => result += normal[o])
    
    return result
  }
}

// testing
console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.fromRoman('MDCLXVI'))