// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const nums =[-1,-100,3,99]
const k = 2

console.log(optimalApproach(nums,k))

function bruteForce(nums,k){
  while(k>0){
    for(let i =nums.length-1;i>0;i--){
      let temp = nums[i];
      nums[i] = nums[i-1]
      nums[i-1] = temp;
    }
    k--;
   
  }
  return nums;
}

// using built in function

function builtinFun(nums,k){
  if(nums.length < k) k = k%nums.length;

  const rotated = nums.slice(-k).concat(nums.slice(0,nums.length-k));
  for(let i =0;i<nums.length;i++){
    nums[i] = rotated[i];
  }
  return nums;
}

// optimal approach without built in function
function optimalApproach(nums,k){
  const n = nums.length;
  k = k % n;

  function reversearr(start,end){
    while(start< end){
      [nums[start],nums[end]] = [nums[end],nums[start]]
      start++;
      end--;
    }
  }

  reversearr(0,n-1);
  reversearr(0,k-1)
  reversearr(k,n-1);
  return nums;
}