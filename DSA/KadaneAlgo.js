function maxSubarraySum(arr){
  let res = arr[0];
  let maxSum = arr[0];
  for(let i =1;i<arr.length;i++){
    maxSum = Math.max(maxSum + arr[i], arr[i]);
    res = Math.max(res, maxSum);
  }
  return res;
}

// console.log(maxSubarraySum([0, -3, 5, -2, 1, 0, 3]));


// brute force
function maxSubarraySumBrute(arr){
  let maxSum = arr[0];

  for(let start =0;start< arr.length;start++){
    let currentSum =0;
    for(let end = start; end < arr.length;end++){
      currentSum += arr[end];
      if(currentSum > maxSum){
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSubarraySumBrute([1, -2, 3, 4, -1, 2, 1, -5, 4])); // 9