function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}


function palindrome(word){
  let len =word.length;
  let start =word.substr(0 , Math.floor(len/2)).toLowercase
  let end = word.substr(len - Math.floor(len/2)).toLowercase
  let flip =end.split('').reverse().join('')
  return(start ===flip)
}
/* 
  Add your pseudocode here
*/
//iterate from the beginning of the string to the middle of the string
//compare the letter we're iterating over to the corresponding letter at the end of the string
  //if the letters don't match, return false

//if we reach the middle, and all the letters match, return true
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"))
  
}

module.exports = isPalindrome;
