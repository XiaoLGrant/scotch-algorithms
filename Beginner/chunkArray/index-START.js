/* 
Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

//use splice and concat

//loop through array
function chunkArray(array, size) {
    let result = []
    for (item of array) {
        let arr = result[result.length - 1]
        if (!arr || arr.length === size) {
            result.push([item])
        } else {
            arr.push(item)
        }
    }
    return result
}

//iterate with number of chunks
function chunkArray(array, size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

//use slice -- fastest method per course
function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}

//recursion -- second fastest per course (46% slower than slice method)
function chunkArray(array, size) {
    if (array.length <= size) {
        return [array]
    }
    return [array.slice(0, size), ...chunkArray(array.slice(size), size)]
}

module.exports = chunkArray