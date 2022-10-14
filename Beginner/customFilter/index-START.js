/*
Return the first element from the given array that passes the test specified by the provided function. 
Both the array and function are passed into the function as arguments as shown below:
arrayFilter(arr, func)
*/

//imperative -- per course, this is the best approach
function customfilter(arr, func) {
    for (let item of arr) {
        if (func(item)) {
            return item
        }
    }
    return undefined
}

//filter
function customFilter(arr, func) {
    const filtered = arr.filter(func(item))
    return filtered[0] ? filtered : undefined
}

//find
function customFilter(arr, func) {
    return arr.find(func)
}

module.exports = customFilter