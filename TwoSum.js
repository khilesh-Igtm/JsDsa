function twoSum(nums, target) {
  let map = {}; // store number -> index

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i]; // Found pair
    }

    map[nums[i]] = i; // Store current number with its index
  }

  return null; // No pair found
}

console.log(twoSum([2, 79, 7, 15], 9)); // [0, 1]
