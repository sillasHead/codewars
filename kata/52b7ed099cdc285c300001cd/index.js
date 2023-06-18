// put it in terminal -> 52b7ed099cdc285c300001cd
function sumIntervals(intervals) {
  //TODO
  intervals.sort((int1, int2) => int1[0] - int2[0])

  let sum = intervals[0][1] - intervals[0][0]
  let aux = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    let int1 = aux[aux.length - 1]
    let int2 = intervals[i]

    const contained = int2[0] >= int1[0] && int2[1] <= int1[1]
    if (contained)
      continue
    else if (int2[0] < int1[1] && int2[1] >= int1[1])
      sum += (int2[1] - int1[1])
    else
      sum += (int2[1] - int2[0])

    aux.push(int2)
  }

  return sum
}

// testing
console.log(sumIntervals([[1, 2], [6, 10], [11, 15]])) // => 9
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]])) // => 7
console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]])) // => 19
console.log(sumIntervals([[0, 20], [-100000000, 10], [30, 40]])) // => 100000030