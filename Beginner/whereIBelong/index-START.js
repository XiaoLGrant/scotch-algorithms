/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//sort array, use while loop to loop through arr and check if num is > or < current arr val

//for loop to find immediate larger value's position
function whereIBelong(arr, num) {
   arr.sort((a, b) => a - b)
   for ( let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
         return i
      }
   }

   return arr.length
}

//for loop to find number of smaller values -- per course, significantly faster than all other algorithms
function whereIBelong(arr, num) {
   let lowerVals = 0
   for (item of arr) {
      if (item < num) {
         lowerVals++
      }
   }
   return lowerVals
}

//while loop to count number of smaller values
function whereIBelong(arr, num) {
   arr.sort((a, b) => a - 1)
   let counter = 0
   while ( arr[counter] < num) {
      counter++
   }
   return counter
}

//find index of value directly
function whereIBelong(arr, num) {
   const sortArr = [...arr, num].sort((a, b) => a - b)
   return sortArr.indexOf(num)
}

module.exports = whereIBelong