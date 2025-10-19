function twoSumMap(arr, k) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = k - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }
  return [];

}

console.log(twoSumMap([2,3,6,5], 7))


// if no extra space is required thne we need to sort it first and apply 2 pointer approach
function twoSumOptimised(arr, k) {
  arr.sort((a, b) => a - b);

  // sort ke baad arr -> [2,3,5,6] , so output be [0,2]
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let mid = arr[i] + arr[j];
    if (mid === k) return [arr[i], arr[j]];
    else if (mid < k) i++;
    else j--;
  }
  return []
}

// console.log(twoSumOptimised([2, 3, 6, 5], 7))