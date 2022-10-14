/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//for of loop -- per course, fastest method
function falsyBouncer(array) {
    let result = []
    for (let item of array) {
        if (item) {
            result.push(item)
        }
    }
    return result
}

//filter -- per course 5% slower
function falsyBouncer(array) {
    return array.filter(item => Boolean(item))
}

module.exports = falsyBouncer