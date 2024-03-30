function countSheeps(sheep) {
  
  let sheepPresent = sheep.filter( e => e === true)

  return sheepPresent.length

}



console.log(countSheeps([true, true, false, false, true, true, true, false]))


// params: sheep    // an array of datataypes (booleans, null, undefined)
// return: sheepPresent   // a number denoting the count of present sheep (true)
// e.g. countSheeps([true, true, false, false, true, true, true, false])
// results in 5

// declare a variable sheepPresent and assign it to sheep.filter where we filter for the elements that are true
// return sheepPresent.length