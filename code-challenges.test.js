// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("generateFibonacci", () => {
  it("returns Fibonacci sequence of length 6", () => {
    const fibonacciLength1 = 6
    const result1 = generateFibonacci(fibonacciLength1)
    expect(result1).toEqual([0, 1, 1, 2, 3, 5])
  })
//   // Expected output: [1, 1, 2, 3, 5, 8]

  it("returns Fibonacci sequence of length 10", () => {
    const fibonacciLength2 = 10
    const result2 = generateFibonacci(fibonacciLength2)
    expect(result2).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

function generateFibonacci(length) {
  if (length < 1) return []
  if (length === 1) return [0]
  
  let sequence = [0, 1]

  while (sequence.length < length) {
    let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    sequence.push(nextNumber)
  }

  return sequence
}
// What is Fibonacci sequence: The Fibonacci sequence is a series of numbers where each number (after the first two) is the sum of the two preceding ones. It usually starts with 0 and 1, and then the subsequent numbers in the sequence are 1, 2, 3, 5, 8, 13, 21, 34, and so on.

// Pseudo code:
//            Create a function = generateFibonacci (this takes the length parameter)
//            Length: can return empty list or equal to 1
//            It initializes a sequence list with the first two Fibonacci numbers (0 and 1).
//            Create loop: can calculate the next Fibonacci number by adding the last and second to last of the sequence.


// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sortObjectValues", () => {
  it("returns sorted values for studyMinutesWeek1", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const result1 = sortObjectValues(studyMinutesWeek1);
    expect(result1).toEqual([15, 15, 20, 30, 30, 60, 90])
  })

  it("returns sorted values for studyMinutesWeek2", () => {
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    const result2 = sortObjectValues(studyMinutesWeek2)
    expect(result2).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

function sortObjectValues(obj) {
  const valuesArray = Object.values(obj)
  return valuesArray.sort((a, b) => a - b)
}
// Pseudo code:
//              Create a function = sortObjectValues
//              Object.values(obj) method to extract an array of the object's values.
//              It then sorts the values in ascending order, resulting in the sortedValues
//              return expected output:
//               [15, 15, 20, 30, 30, 60, 90]
//              
//               [10, 15, 20, 45, 60, 65, 100]