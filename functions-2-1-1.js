/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a,b) => {
  if(a > b){
    return a;}
    else {
    return b;
    }
};
console.log(maxOfTwoNumbers(20,10))


/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (a,b,c) => {
  let maxOfThree = Math.max(a,b,c);
  return maxOfThree;
}

console.log(maxOfThree(23,22,11));
/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (argument) => {
  let array = ["a","e","i","o","u"];

  for(let i = 0; i < array.length; i++){
    if( argument === array[i]){
    return true;
  }
}
return false;
};
console.log(isCharacterAVowel("a"))
/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = () => {
  // ADD YOUR CODE HERE
  sumArray = (someArray) => {
    let sum = 0
    
    for(let i = 0; i < someArray.length; i++){
      sum += someArray[i]
    }
  
    return console.log(sum)
  };
  
  sumArray([1, 2, 3, 4]);
};

multiplyArray = (anotherArray) => {
  let product = 1
  
  for(let i = 0; i < anotherArray.length; i++){
    product *= anotherArray[i]
  }
  
  return console.log(product)
  };
  
  multiplyArray([1, 2, 3, 4])

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
function numArgs() { 
  return arguments.length;
} 

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

//reverseString = () => {
  // ADD YOUR CODE HERE
 // program to reverse a string

function reverseString(str) {

  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

const string = prompt('Insert Text');

const result = reverseString(string);
console.log(result);
//};

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = () => {
  // ADD YOUR CODE HERE
};function findLongestWord(str) {

  let words = str.split(' ');
  let longest = 0;

  for (let i=0;i<words.length;i++) {
       if (words[i].length > longest) {
            longest = words[i].length;
       }  
  }

  return longest;
}

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = () => {
  // ADD YOUR CODE HERE
};
function getLongestWord(str){
  let words = str.split(' ');
  let maxLength = 0;
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }

  console.log(maxLength);
  console.log(longestWord);

}

getLongestWord();