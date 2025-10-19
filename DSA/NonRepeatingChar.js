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

// console.log(nonRepeatingChar("bbbb"));


function longestUniqueSubstring(str){
  let map = new Map();
  let left =0;
  let maxLen =0;

  for(let right =0;right <str.length;right++){
    if(map.has(str[right]) && map.get(str[right]) >=left){
      left = map.get(str[right]) + 1;
    }

    map.set(str[right],right);
    maxLen = Math.max(maxLen, right-left+1);
  }
  return maxLen;
}

console.log(longestUniqueSubstring("abcabcbb"));


// if instead of maxLen , substring hi return karne ko bol diya too

