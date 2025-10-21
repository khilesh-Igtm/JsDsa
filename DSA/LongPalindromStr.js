// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

const s = "babad"
console.log(optimalApproach(s))


// here it's time complexity is O(n3)
function bruteForce(s){
  let maxLen =0;
  let longest ="";
  for(let i =0;i<s.length;i++){
    for(let j =i;j<s.length;j++){
      if((j-i+1 > maxLen) && isPalindrome(s,i,j)){
        maxLen = j-i+1;
        longest = s.slice(i,j+1)
      
      }
    }
  }
  return longest
}

function isPalindrome(s,start,end){
  while(start<end){
    if(s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
}

// optimal approach is expanding from the centre 
function optimalApproach(s){
  if(!s || s.length < 1) return "";

  let start =0;
  let end =0;

  for(let i =0;i<s.length;i++){
    const len1 = expandFromCentre(s,i,i) //ye odd length wale ke liye 
    const len2 = expandFromCentre(s,i,i+1) //ye even length wale ke liye 
    const len = Math.max(len1,len2);

    if(len > end-start){
      start =i - Math.floor((len-1)/2);
      end = i+ Math.floor(len/2);
    }
  }
  return s.substring(start,end+1);
}

function expandFromCentre(s,left, right){
  while(left >=0 && right < s.length && s[left] === s[right]){
    left--;
    right++;
  }
  return right-left-1;
}

// fir abba , odd length wala outout nahi de payega bcz hum sirf 1 char consider kare hai aur vo palidnorm nahi bana  payega but if even wala formula use kare , too keft i and right i+1 hoga and then we can see it as palidnrome.