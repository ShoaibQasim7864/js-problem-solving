//3rd questions
//for checking is the number is palindrome Number

// palindrom number is number which will be same after reversing to it e.g 121===1211

const isPalindrome = (number) => {
  return number === +number.toString().split("").reverse().join("");
};
// const result = isPalindrome(121213);
// console.log(result);

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

let x = 0;
// let a = ++x; //x=x+1
// console.log(x++);

//2nd Question
//fabonacci serires in javascript e.g [0,1,1,2,3,5,8,13,21,34,.....] basically fabinacci series is the series in which sum of two numbers give us the 3rd number

//formula for it f(n-1)+f(n-2) for n>1

const fib = (number) => {
  const arr = [0, 1];

  for (let i = 2; i < number; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    console.log(arr);
  }
};

// fib(7);

//is given string is valid Anagram ? Anagram means "Anagram" uses same alphabetic making different string

const isAnagram = (s, t) => {
  if (s.lentgh !== t.lentgh) return false;

  console.log(s.split("").sort().join("") === t.split("").sort().join(""));
};

// isAnagram("cat", "tac");
//cat => tac using same alphabets

// 4th Question is to find in an array which two possible numbers added to become the target value

// const getTargetNumbers = (num, target) => {
//   for (let i = 0; i < num.lentgh; i++) {
//     for (let j = i + 1; j < num.lentgh; j++) {
//       if (num[i] + num[j] === target) return [i, j];
//     }
//   }
// };

// console.log(getTargetNumbers([2, 3, 4], 6));

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.lentgh; i++) {
    for (let j = i + 1; j < nums.lentgh; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
