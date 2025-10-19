function ReverseWordsInStr() {
  const str = "   the sky is   blue   ";

  const wordArr = str.split(" ");// if no extra space is present in front and end
  //  const wordArr = str.trim().split(/\s+/); //if extra space is present
  for (let i = 0; i < wordArr.length / 2; i++) {
    let temp = wordArr[i];
    wordArr[i] = wordArr[wordArr.length - 1 - i];
    wordArr[wordArr.length - 1 - i] = temp;
  }
  console.log(wordArr.join(' '));
}

// ReverseWordsInStr();


function noBuiltInMethod(str) {

  let res = "";
  let word = "";
  let n = str.length;

  // skip the space from start
  let i = 0;
  while (i < n && str[i] === " ") i++;

  // skip the space from end
  let j = n - 1;
  while (j >= 0 && str[j] === " ") j--;

  // traverse backend
  while (i <= j) {
    if (str[j] !== " ") {
      // console.log('my seer', str[j])
      word = str[j] + word ; // if we want only the word to be reversed
      // word = word + str[j]; if we want each character to be reversed
    } else {
      if (word.length > 0) {
        if (res.length > 0) res += " ";
        res += word;
        word = "";
      }
    }
    j--;
  }

  // last word, as last word = hello and vo else condition me nahi jayega , isliye ek last time check karo ki word ki length 0 se badi hai
  // agr haa too usme jo bhi hai ushe result me add kardo.
  if (word.length > 0) {
    if (res.length > 0) res += " ";
    res += word;
  }
  return res;
}

console.log(noBuiltInMethod("  hello world !  "));