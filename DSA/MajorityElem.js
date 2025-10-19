// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const nums = [3,2,3]
console.log(usingMap(nums))

function bruteForce(nums){
  for(let i =0;i<nums.length;i++){
    let count = 1;
    for(let j =i+1;j<nums.length;j++){
      if(nums[i] === nums[j]){
        count++;
        if(count > Math.floor(nums.length/2)){
          return nums[i];
        }
      }
    }
  }
  return nums[0];
}

function optimalApproach(nums){
  let element;
  let count =0;
  for(let i =0;i<nums.length;i++){
    if(count ===0){
      count = 1;
      element = nums[i];
    }
    else if(nums[i] === element){
      count++;
    }
    else count--;
  }
  return element;
}


function usingMap(nums){
  const n = nums.length;
  const map = new Map();
  for(let i =0;i<nums.length;i++){
    if(map.has(nums[i])){
      map.set(nums[i], map.get(nums[i])+1);
    }else{
      map.set(nums[i],1);
    }
  }

  for(let [key, value] of map){
    if(value > Math.floor(n/2)){
      return key;
    }
  }
  return -1;
}