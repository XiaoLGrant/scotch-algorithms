/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


//split text into array of words
//use for of loop to loop through each word and capitalize first letter of each word

//first attempt -- fastest in benchmark tests 1158691657.3 ops/s +- 8.04%
// function capSentence(text) {
//   const words = text.split(' ')
//   let capitalized = []
//   for (let word of words) {
//     const capitalizeFirstLet = word[0].toUpperCase()
//     const restOfWord = word.slice(1).toLowerCase()
//     capitalized.push(`${capitalizeFirstLet}${restOfWord}`)
//   }

//   return capitalized.join(' ')
// }

//forEach 1146648743.01 +- 8.31%
// function capSentence(text) {
//   const words = text.toLowerCase().split(' ')
//   let capitalized = []

//   words.forEach(word => {
//     capitalized.push(word[0].toUpperCase() + word.slice(1))
//   })
  
//   return capitalized
// }

//map and splice -- fastest per course 1146648743.01 +- 8.31%
// function capSentence(text) {
//   const words = text.toLowerCase().split(' ')
//   let capitalized = words.map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//   })
  
//   return capitalized.join(' ')
// }

//map and replace 1116779379.34 ops/s +- 8.46%
// function capSentence(text) {
//   const words = text.toLowerCase().split(' ')
//   let capitalized = words.map(word => {
//     return word.replace(word[0], word[0].toUpperCase())
//   })
//   return capitalized.join(' ')
// }

module.exports = capSentence