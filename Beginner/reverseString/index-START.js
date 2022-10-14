/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//convert text into an array, then use the reverse method, then use join to convert back to a string

function reverseString(text) {
    /* built-in methods */
    //return text.split('').reverse().join('') //2.077s
    //return [...text].reverse().join('') //1.805s-- the split operator here will automatically convert the chars of text into an array

    /*for-loop method-- 2.197s*/
    // let reversed = ''
    // for (let i = text.length-1; i >= 0; i-- ) {
    //     reversed += text[i]
    // }
    // return reversed
    //improve via a for of loop-- 1.912s
    // let reversed = ''
    // for (char of text) {
    //     reversed += char
    // }
    // return reversed

    /*recursive method-- I don't understand this -- 2.158s*/
    // if (text === '') {
    //     return ''
    // } else {
    //     return reverseString(text.substr(1) + text[0])
    // }

    /* Reduce method-- 2.636s */
    //return [...text].reduce((acc, c) => c + acc, '')
}



module.exports = reverseString