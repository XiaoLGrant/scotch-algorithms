/* CHALLENGE
Given an integer, return an integer that has the reverse ordering of that which was received. E.g
reverseInteger(-123) // should return -321

    The signs must not change i.e -123 becomes -321
    The value returned must be an integer.
    All insignificant zeroes must be removed i.e 900 becomes 9 and not 009

*/

//check for negative, convert to str & split into individual char, reverse, check for preceding zeroes & remove if present, join, convert to number, conver to negative if needed

//attempt (didn't finish removing excess zeroes)
function reverseInteger(num) {
    let negative = false
    if (num < 0) {
        negative = true
        num *= -1
    }
    const reversed = +('' + num).split('').reverse().join('')
    return reversed
}

//solution
function reverseInteger(num) {
    function reverseString(text) {
        return [...text].reduce((acc, c) => c + acc, '')
    }

    const integer = parseInt(reverseString(num.toString()))
    return (integer * Math.sign(num))
}


module.exports = reverseInteger