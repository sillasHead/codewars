// put it in terminal -> 51ba717bb08c1cd60f00002f
function solution(list) {
  // TODO: complete solution 
  let count = 1
  for (let i = 0; i <= list.length; i++) {
    if (list[i] === list[i - 1] + 1 && i !== list.length) {
      count++
    } else if (count >= 3) {
      let fn = list[i - count]
      let cn = list[i - 1]
      list.splice(i - count, count, `${fn}-${cn}`)
      i -= count
      count = 1
    } else {
      count = 1
    }
  }
  return list.toString()
}

// testing
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))