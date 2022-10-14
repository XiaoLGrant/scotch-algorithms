/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//set -- 1.01s // per course, this is 2nd fastest method (33% slower)
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });
//     return [...new Set([...jointArray])] // OR return Array.from(new Set([...jointArray]))
// }

//filter -- 1.019s // per course, this is fastest method
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(arr => {
//         jointArray = [...jointArray, ...arr]
//     })
//     const uniqueArr = jointArray.filter((item, index) => {
//         jointArray.indexOf(item) === index
//     })

//     return uniqueArr    
// }

//reduce -- 1.033s
function mergeArrays(...arrays) {
    let jointArr = []
    arrays.forEach(arr => {
        jointArr = [...jointArr, ...arr]
    })

    const uniqueArr = jointArr.reduce((acc, c) => {
        if (!acc.includes(c)) {
            acc.push(c)
        }
        return acc
    }, [])

    return uniqueArr
    
}

module.exports = mergeArrays