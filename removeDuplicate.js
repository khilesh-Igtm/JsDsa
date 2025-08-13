function findDuplicatesBruteForce(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // !duplicates.includes(arr[i]) -> this is needed bcz if any item whose occurence is 3 or greater than 3 then this helps , else code won't work properly
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

console.log(findDuplicatesBruteForce([1, 2, 3, 2, 4, 5, 1, 6, 3]));