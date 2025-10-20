// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(mostOptimal(strs))

function groupAna(strs) {
  let visited = new Array(strs.length).fill(false);
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) continue;

    let group = [strs[i]];
    visited[i] = true;

    for (let j = i + 1; j < strs.length; j++) {
      if (!visited[j] && isAnagram(strs[i], strs[j])) {
        group.push(strs[j])
        visited[j] = true;
      }
    }
    result.push(group)
  }
  return result;
}

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  return a.split("").sort().join("") === b.split("").sort().join("");
}


// optimal approach
function optimalApp(strs) {
  let map = new Map();
  for (let str of strs) {
    char = str.split('').sort().join('');
    if (!map.has(char)) {
      map.set(char, []);
    }
    map.get(char).push(str);
  }
  return Array.from(map.values())
}

// most optimal approach
function mostOptimal(strs){
  let map = new Map();
  for(let word of strs){
    let count = Array(26).fill(0);
    for(let char of word){
      count[char.charCodeAt(0) - 97]++;
    }
    const key = count.join("#");

    if(!map.has(key)){
      map.set(key,[]);
    }
    map.get(key).push(word);
  }
  return Array.from(map.values());
}