/* CHALLENGE
Given a string of text containing 0 or more vowels, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // loop
    /*let count = 0
    const vowels = 'aeiou'
    //for (let i = 0; i < text.length; i++) { // 2.488s
    for (char of text.toLowerCase()) { //2.231s
        if (vowels.includes(char)) {
       // if (vowels.includes(text[i])) {
            count ++
        }
    }
    return count*/

    //filter-- 2.04s
    //return [...text].filter(char => 'aeiou'.includes(char.toLowerCase())).length()

    //regex-- 2.503s
    // const matches = text.match(/[aeiou]/gi)
    // if (matches) {
    //     return matches.length
    // } else {
    //     return 0
    // }


}



module.exports = vowelsCounter;
