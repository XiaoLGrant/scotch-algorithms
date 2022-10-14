/*
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, 
perform a search and replace on the sentence using the arguments provided and return the new sentence. 
Make sure to match the casing(capitalization) of the string to be replaced. E.g 

searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
*/

//check case of word
//convert replacement to match case of word

//use replace method -- 1.342s // 1190003523.75 ops/s +- 7.8% (Fastest)
// function searchReplace(str, word, newWord) {
//     if (word[0] === word[0].toUpperCase()) {
//         newWord = newWord[0].toUpperCase() + newWord.slice(1)
//     }

//     return str.replace(word, newWord)
 
//  }

//use regex -- 1.06s // 1105035379.4 ops/s +- 8.76% 
function searchReplace(str, word, newWord) {
    const regex = new RegExp(word, "gi")
    if (/[A-z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }

    return str.replace(regex, newWord)
 
 }
 
 
 module.exports = searchReplace