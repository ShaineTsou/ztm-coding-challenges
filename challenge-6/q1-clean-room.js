// ---- Test Cases ----
const arr1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
// -> [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

const arr2 = [10, 5, 7, 5, 2, 10, 3, 1, 4];
// -> [1,2,3,4,[5,5], 7, [10, 10]]

const arr3 = [4];
// -> [4]

const arr4 = [];
// -> []

const arr5 = [31, 29, 4, 10, 31, "4", 4, 31, "4", 2, "7"];
// -> [[2, [4,4], 10, 29, [31, 31, 31]], [['4', '4'], '7']]

// ---- Solution ----
const answer = function (arr) {
  if (arr.length <= 1) return arr;

  // Sort arr in ascending order
  arr = arr.sort((a, b) => a - b);

  const ans = [];
  let currentNum = arr[0];
  let group = [];

  for (let num of arr) {
    if (num === currentNum) {
      group.push(num);
    } else {
      if (group.length > 1) {
        ans.push(group);
      } else {
        ans.push(group[0]);
      }

      currentNum = num;
      group = [num];
    }
  }

  // After looping, check the last group
  if (group.length > 1) {
    ans.push(group);
  } else {
    ans.push(group[0]);
  }

  return ans;
};

console.log(answer(arr1));
console.log(answer(arr2));
console.log(answer(arr3));
console.log(answer(arr4));

// ---- Bonus Solution ----
const cleanRoom = function (sortedArr) {
  if (sortedArr.length <= 1) return sortedArr;

  let ans = [];
  let group = [];
  let currentElem = sortedArr[0];

  for (let elem of sortedArr) {
    if (elem === currentElem) {
      group.push(elem);
    } else {
      if (group.length > 1) {
        ans.push(group);
      } else {
        ans.push(group[0]);
      }
      group = [elem];
      currentElem = elem;
    }
  }

  // After looping, check the last group
  if (group.length > 1) {
    ans.push(group);
  } else {
    ans.push(group[0]);
  }

  return ans;
};

const bonusAnswer = function (arr) {
  if (arr.length <= 1) return arr;

  // Sort arr in ascending order
  arr = arr.sort((a, b) => a - b);

  // Separate nums and strings
  let nums = [];
  let strings = [];

  for (let elem of arr) {
    if (typeof elem === "number") {
      nums.push(elem);
    } else if (typeof elem === "string") {
      strings.push(elem);
    }
  }

  nums = cleanRoom(nums);
  strings = cleanRoom(strings);

  return [nums, strings];
};

console.log(bonusAnswer(arr5));
