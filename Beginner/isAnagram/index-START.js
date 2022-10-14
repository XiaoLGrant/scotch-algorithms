/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

//use char map and then compare objects
// OR
//split each word into its own array, sort the array, then join and compare strings

//direct comparison // 1145593732.03 ops/s +- 1.02% (faster in benchmarks, but per course is much slower than char map comparison)
/*function isAnagram(stringA, stringB) {
    const sanitizeStr = (str) => str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    return sanitizeStr(stringA) === sanitizeStr(stringB)
    // if (stringA.length === stringB.length) {
    //     const sanitizeStr = (str) => str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join()
    //     return sanitizeStr(stringA) === sanitizeStr(stringB)
    // } else {
    //     return false
    // }
}*/

//char map comparison -- attempt
// function isAnagram(stringA, stringB) {
//     const sanitizeStr = (str) => str.toLowerCase().replace(/[^a-z\d]/g, '').split('')
//     function charMap(arr) = arr.reduce((acc, c) => {
//         if (!acc[c]) {
//             acc[c] = 1
//         } else {
//             acc[c]++
//         }
//         return acc
//     }, {})

//     const charMapA = charMap(sanitizeStr(stringA))
//     const charMapB = charMap(sanitizeStr(stringB))

//     return JSON.stringify(charMapA) === JSON.stringify(charMapB)
// }

//char map comparison -- solution // 1140582009.59 ops/s +- 1.36%
function isAnagram(stringA, stringB) {
    function createCharMap(text) {
        let charMap = {}
        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }
        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)

        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}
module.exports = isAnagram