// Sab possible substrings generate karo.Har substring ke liye check karo kya usme duplicate char hai ya nahi.Agar nahi → uski length nikal lo, aur max length update karte raho.

function nonRepeatingChar(str){
  let maxLen =0;
  for(let i =0;i<str.length;i++){
    let seen = new Set();
    for(let j =i;j<str.length;j++){
      if(seen.has(str[j])){
        break;
      }
      seen.add(str[j]);
      maxLen = Math.max(maxLen, j-i+1);
    }
  }
  return maxLen;
}

console.log(noRepeat("abcabcbb"));


// console.log(longestUniqueSubstring("abcabcbb"));


// if instead of maxLen , substring hi return karne ko bol diya too

// optimal solution
function noRepeat(str){
  let set = new Set();
  let left =0;
  let maxLen =0;
  let longestSub ="";

  for(let right =0;right<str.length;right++){
    while(set.has(str[right])){
      set.delete(str[left])
      left++;
    }
    set.add(str[right])
    if(right - left + 1> maxLen){
      maxLen = right - left +1;
      longestSub = str.substring(left,right+1);
    }
  }
  return {longestSub, maxLen};
}
