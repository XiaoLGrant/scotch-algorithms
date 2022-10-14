/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


//first attempt -- 1.058s // 1190215354.52 ops/s +- 7.6% // fastest
function maxRecurringChar(text) {
    const counts = text.split(' ').join('').split('').reduce((acc, c) => {
        if (!acc[c]) {
            acc[c] = 0
        }
        acc[c]++
        return acc
    }, {})

    let max = 0
    let char = ''
    for (letter in counts) {
        if (counts[letter] > max) {
            max = counts[letter]
            char = letter
        }
    }
    return char
}

//for-in lop -- 1.047s // 1076555458.79 ops/s +- 8.29% // fastest
function maxRecurringChar(text) {
    let max = 0
    let char = ''
    let charMap = {}

    for (let character of text) {
        if (charMap.hasOwnProperty(character)) {
            charMap[character]++
        } else {
            charMap[character] = 1
        }
    }

    for (let character in charMap) {
        if (charMap[character] > max) {
            max = charMap[character]
            char = character
        }
    }
    return char
}

//array from a character map -- 1.051s
function maxRecurringChar(text) {
    let charMap = {}

    for (let character of text) {
        if (charMap.hasOwnProperty(character)) {
            charMap[character]++
        } else {
            charMap[character] = 1
        }
    }

    const charArr = Object.keys(charMap)
    const charArrVals = Object.values(charMap)
    const max = Math.max(...charArrVals)

    return charArr[charArrVals.indexOf(max)]
}



module.exports = maxRecurringChar;