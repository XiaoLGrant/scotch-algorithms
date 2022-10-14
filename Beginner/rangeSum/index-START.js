/* CHALLENGE
Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. E.g
rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9

*/

//loop through numbers, and sum as looping


//for loop -- per course, this is optimal solution
function rangeSum(arr) {
    let sum = 0
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i
    }
    return sum
}

//arrithmetic progression formula
function rangeSum(arr) {
    return ((arr[1] - arr[0] + 1) * arr[0] + arr[1]) / 2
}

//recursion -- per course, this is the least optimal solution
function rangeSum(arr) {
    if (arr[0] === arr[1]) {
        return arr[0]
    } else {
        return rangeSum([arr[0], arr[1] - 1] + arr[1])
    }
    
}

//reduce
function rangeSum(arr) {
    let nums = []
    for (let i = arr[0]; i <= arr[1]; i++) {
        nums.push(i)
    }

    return nums.reduce((acc, c) => acc+=c, 0)
}


module.exports = rangeSum