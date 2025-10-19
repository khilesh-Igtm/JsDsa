// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const nums = [1,2,3,4]
console.log(bruteForce(nums))

function bruteForce(nums){
  let newarr = []
  for(let i =0;i<nums.length;i++){
    let product = 1;
    for(let j =0;j<nums.length;j++){
      if( i !== j){
        product *= nums[j];
      }
    }
    newarr.push(product)
  }
  return newarr;
}

// optimal approaach but space complexity is O(n)
function optimalApproach(nums){
  let res = [];
  let left =[];
  let right =[];
  left[0] = 1;
  right[nums.length-1] = 1;

  //prefix product
  for(let i =1;i<nums.length;i++){
    left[i] = nums[i-1] * left[i-1]
  }

  // suffix product
  for(let i = nums.length-2;i>=0;i--){
    right[i] = nums[i+1] * right[i+1];
  }

  for(let i=0;i<nums.length;i++){
    res[i] = left[i] * right[i];
    if(res[i] === -0){
      res[i] =0;
    }
  }
  return res;
}

// most optimal approach with space as O(1)

function productExceptself(nums){
  let res = Array(nums.length).fill(1)

  let prefix = 1;
  for(let i =0;i<nums.length;i++){
    res[i] = prefix;
    prefix *= nums[i]
  }

  let suffix = 1;
  for(let i = nums.length-1;i>=0;i--){
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
}