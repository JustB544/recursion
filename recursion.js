/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1){
    return nums[0];
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let longest1 = words[0].length;
  if (words.length === 1){
    return longest1;
  }
  let longest2 = longest(words.slice(1));
  return (longest1 > longest2) ? longest1 : longest2;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 2){
    return str.charAt(0);
  }
  return str.charAt(0) + everyOther(str.substring(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1){
    return true;
  }
  return str.charAt(0) === str.charAt(str.length-1) && isPalindrome(str.substring(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0){
    return -1;
  }
  if (arr[0] === val){
    return 0;
  }
  const next = findIndex(arr.slice(1), val);
  return (next === -1) ? -1 : 1 + next;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1){
    return str;
  }
  return str.substring(str.length-1) + revString(str.substring(0, str.length-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const arr = [];
  for (let item in obj){
    if (typeof obj[item] === "string"){
      arr.push(obj[item]);
    }
    else if (typeof obj[item] === "object"){
      arr.push(...gatherStrings(obj[item]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 0 || arr[0] > val || arr[arr.length-1] < val){
    return -1;
  }
  let idx = Math.ceil(arr.length/2) - 1;
  let next;
  if (arr[idx] < val){
    next = binarySearch(arr.slice(idx+1), val)
    return (next === -1) ? -1 : idx + 1 + next;
  }
  else if (arr[idx] > val){
    next = binarySearch(arr.slice(0, idx), val);
    return (next === -1) ? -1 : next;
  }
  else {
    return idx;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
