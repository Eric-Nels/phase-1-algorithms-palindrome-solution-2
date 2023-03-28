function isPalindrome(word) {
  // Write your algorithm here
  const lowerWord = word.toLowerCase()
  let left = 0;
  let right = lowerWord.length - 1;
  while (left < right) {
    if (lowerWord[left] !== lowerWord[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
