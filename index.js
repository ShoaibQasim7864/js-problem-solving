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
