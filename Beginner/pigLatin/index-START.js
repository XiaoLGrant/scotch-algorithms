/* CHALLENGE
    Translate the provided string to Pig Latin by following the rules below:

    For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
        "pig" = "igpay"
    For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
        "glove" = "oveglay"
    For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
        "explain" = "explainway”

*/

//split words of text into an array
//determine if each word in array starts with a single consonant, a cluster of consonants, or a vowel
//use a conditional to determine how to concatenatne/slice the word to get a pig latinized word

//Imperative -- fastest method
function pigLatin(text) {
    text = text.toLowerCase()
    const vowels = 'aeiou'
    let vowelIndex = 0
    if (vowels.includes(text[0])) {
        return text + "way"
    } else {
        for (let char of text) {
            if (vowels.includes(char)) {
                vowelIndex = str.indexOf(char);
                break;
            }
        }
    }
    return text.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
}

//Declarative -- according to the course, is much slower
function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}

module.exports = pigLatin