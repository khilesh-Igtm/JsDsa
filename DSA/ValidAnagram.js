// Input: s = "anagram", t = "nagaram"
// Output: true

const s = "cat"
const t = "tca"

console.log(validAnagram(s,t))

function bruteForce(s,t){
  const arr1 = s.split('')
  const arr2 = t.split('')
  if(arr1.length !== arr2.length) return false;
  arr1.sort()
  arr2.sort()
  return arr1.join('') === arr2.join('')
}

// optimal approach
function validAnagram(s,t){
  if(s.length !== t.length) return false;

  let count ={};
  for(let char of s){
    count[char] = (count[char] || 0) + 1;
  }
  for(let char of t){
    if(!count[char]) return false;
    count[char]--;
  }
  return true
}