/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/


//split each char into an array, reverse the array, join the array
// use comparison operator to determine if reversed word == text

//Common(intuitive) method -- 1.223s // 1098139808.47 ops/s +- 8.59%
// function palindromeChecker(text) {
//     const reverse = text.toLowerCase().split('').reverse().join('')
//     return text.toLowerCase() === reverse 
// }

//Loop through & compare // 1.095s -- 1146756866.07 ops/s +- 8.08%
//inefficient b/c once you're past the middle point, you're repeating comparisons
// function palindrome(text) {
//     const charArr = text.toLowerCase().split('')
//     const result = charArr.every((char, index) => {
//         return char === charArr[charArr.length - 1 - index]
//     })
//     return result
// }

//loop & compare (but optimized) -- 1.064s // 1126392039.35 ops/s +- 8.11% supposedly the fastest, but benchmark indicates this is the slowest
function palindrome(text) {
    for (let i = 0 ; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - i - 1]) {
            return false
        }
    }
    return true
}

module.exports = palindromeChecker;