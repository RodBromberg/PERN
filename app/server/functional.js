// function foo(msg) {
//   var fn = function inner() {
//     return msg.toUpperCase();
//   };
//   return fn;
// }

// var helloFn = foo("hello");

// console.log(helloFn());

// function person(name) {
//   return console.log(`I am ${name}`);
// }

// var fred = person("Fred");
// var susan = person("Susan");

// person("Fred");

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let key = nums[i];

    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
};

console.log(insertionSort([4, 3, 2, 1]));

// find if a string contains a particular substring

function findMatch(subString, str) {
  let m = subString.length;
  let n = str.length;

  // ex: 'name', 'abcname'
  // take the length of the subString and str
  // loop from 0 --> i <= n-m....i.e: 0 <= 7 - 4
  // while 0 < 4 && str[0] === subString[0]
  // if while loop conditonal isnt fulfilled
  // for loop increments i and checks next letter
  // than increment j
  // continue to check next letter within string
  //

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && str[i + j] === subString[j]) {
      //
      j = j + 1;

      if (j === m) return i;
    }
  }
  return -1;
}

console.log(findMatch("abba", "aababba"));
