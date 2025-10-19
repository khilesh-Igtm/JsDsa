
// if array is sorted given
function removeDuplicate(arr){
  let newarr =[];
  for(let i=0;i<arr.length;i++){
    if(arr[i] !== arr[i+1]){
      newarr.push(arr[i]);
    }
  }
  console.log(newarr)
}

// if array is sorted and no extra space
function removeDuplicate2(arr){
  let i =0;
  let j = 1;
  while(j<arr.length){
    if(arr[i] === arr[j]){
      j++;
    }else{
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  console.log(arr.slice(0, i + 1));
}

// removeDuplicate2([7,7,7,7]);




// if array is not sorted
function unsortedDuplicate(arr){
  const mySet = new Set(arr);
  return [...mySet].sort((a,b)=> a-b);

}
// console.log(unsortedDuplicate([]));

// if array is unsorted without built in methods
function removeDupBrute(arr){
  let result = [];

  for(let i=0;i<arr.length;i++){
    let exists = false;
    for(let j =0;j<result.length;j++){
      if(arr[i] === arr[j]){
        exists = true;
        break;
      }
    }
    if(!exists){
      result.push(arr[i]);
    }
  }

  // manual bubble sort
  for(let i=0;i<result.length-1;i++){
    for(let j =0;j<result.length-1-i;j++){
      if(result[j] > result[j+1]){
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  return result;
}

console.log(removeDupBrute([4, 1, 2, 1, 2, 3]));

function bubbleSort(arr){
  for(let i =0;i<arr.length-1;i++){
    for(let j =0;j<arr.length-1-i;j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

function removeDupOptimized(arr){
  bubbleSort(arr);

  // two pointer to remove duplicates in place
  let i=0;
  for(let j =1;j<arr.length;j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0,i+1);
}

// console.log(removeDupOptimized([4,1,2,1,2,3]))