function divideArray(nums = []) {
  let oddNumbers = [];
  let evenNumbers = [];
  
  for (let num of nums) {
    if (num % 2 === 0) { // even
      evenNumbers.push(num);
    } else { // odd
      oddNumbers.push(num);
    }
  }
  
  console.log("Even numbers:");
  if (evenNumbers.length <= 0) {
    console.log("None")
  } else {
    const sortedEvenNumbers = evenNumbers.sort((a, b) => a - b);
    sortedEvenNumbers.forEach((n) => console.log(n))
  }
  
  console.log("Odd numbers:");
  if (oddNumbers.length <= 0) {
    console.log("None")
  } else {
    const sortedOddNumbers = oddNumbers.sort((a, b) => a - b);
    sortedOddNumbers.forEach((n) => console.log(n))
  }
}
