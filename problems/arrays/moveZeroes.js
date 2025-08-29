/*
Problem: Move Zeroes
Description:
  Move all 0s to the end of the array while keeping the order of non-zero elements.
  Do it in-place and return the array for convenience.

I: 
O: 
C: 
E:
*/

function moveZeroes(nums) {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      [nums[write], nums[read]] = [nums[read], nums[write]];
      write++;
    }
  }
  return nums;
}

// ✅ Tests
// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
// console.log(moveZeroes([0, 0, 0])); // [0,0,0]
// console.log(moveZeroes([1, 2, 3])); // [1,2,3]
// console.log(moveZeroes([])); // []
