// put it in terminal -> 521c2db8ddc89b9b7a0000c1
snail = function(array) {
  // enjoy
  let result = []

  while (array.length) {
    removeTopBottom(array, result, 'shift', 0)
    removeLeftRight(array, result, 'pop', true)
    removeTopBottom(array, result, 'pop', array.length - 1)
    removeLeftRight(array, result, 'shift', false)
  }

  return result
}

removeTopBottom = function(array, result, method, index) {
  if (!array[index]) return
  
  const { length } = array[index] || 0
  for (let i = 0; i < length; i++) 
    result.push(array[index][method]())
  
  array[method]()
}

removeLeftRight = function(array, result, method, right) {
  if (right) 
    for (let i = 0; i < array.length; i++) 
      result.push(array[i][method]())

  else 
    for (let i = array.length - 1; i >= 0; i--) 
      result.push(array[i][method]())
}

// testing
array = [[1,  2,   3,  4,  5],
         [6,  7,   8,  9, 10],
         [11, 12, 13, 14, 15],
         [16, 17, 18, 19, 20],
         [21, 22, 23, 24, 25]]

console.log(snail(array))