// ---- Test Cases
const nums1 = [-1, 2, 4, 5, 9];
const target1 = 7;
// -> [1, 3]

const nums2 = [-1, 2, 4, 5, 9];
const target2 = 100;
// -> null

const nums3 = [5];
const target3 = 5;
// -> null

const nums4 = [];
const target4 = 8;
// -> null

const twoSum = function (arr, target) {
  if (nums1.length <= 1) return null;

  const seenNums = {};

  for (let i = 0; i < arr.length; i++) {
    const numToFind = target - arr[i];

    if (numToFind in seenNums) {
      return [i, seenNums[numToFind]];
    } else {
      seenNums[arr[i]] = i;
    }
  }

  return null;
};

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
console.log(twoSum(nums4, target4));
