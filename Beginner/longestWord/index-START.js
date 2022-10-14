/* CHALLENGE
Given a sentence, return the longest word in the string.
E.g longestWord('Top Shelf Web Development Training on Scotch') should return 'Development'
*/

//split text into array of words.
//loop through array, pushing length of each word to a new array
//return max of array

//first attempt
// function longestWord(text) {
//     let lengths = []
//     text.split(' ').forEach(word => {
//         lengths.push(word.length)
//     })
//     return Math.max(...lengths)
// }

//for loop // 1054784754.84 ops/s +- 8.58% (slowest in js bench, but in course is apparently tied with reduce as fastest method)
// function longestWord(text) {
//     let max = 0
//     let maxWord = ''
//     let arr = text.split(' ')

//     for (let word of arr) {
//         if (word.length > max) {
//             max = word.length
//             maxWord = word
//         }
//     }

//     return maxWord
// }

//reduce -- first attempt
// function longestWord(text) {
//     const arr = text.split(' ')
//     const maxWord = arr.reduce((acc, c, i) => {
//         if (acc[c].length > acc[0]) {
//             acc[0] = acc[c].length
//             acc[1] = c
//         }
//     }, [0, ''])
//     return maxWord[1]
// }

//reduce --actual solution // 1136169404.29 ops/s +- 8.82%
// function longestWord(text) {
//     const maxWord = text.split(' ').reduce((acc, c) => {
//         if (c.length > acc.length) {
//             return c
//         } else {
//             return acc
//         }
//     }, '')
//     return maxWord
// }

//sort // 1104812392.68 ops/s +- 8.28% (per course, this is slowest method)
function longestWord(text) {
    const maxWord = text.split(' ').sort((a, b) => b.length - a.length)
    return maxWord[0]
}

module.exports = longestWord