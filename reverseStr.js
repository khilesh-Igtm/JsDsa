// in js strings are immutable , so we first convert it to array then can use two pointer approach and swap the character of string.
function reverseString(str) {
  let arr = str.split('');
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }

  return arr.join('');
}

console.log(reverseString("hello")); // "olleh"


// or we can create another string variable which will have string in reverse order by adding str from end to 0.