// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Example 5:
// Input: s = "([)]"
// Output: false

const s = "([])"
console.log(validPar(s))


// most basic approach to solve this problem
function validPar(s){
   while(s.includes("()") || s.includes("[]") || s.includes("{}")){
        s = s.replace("()","");
        s = s.replace("[]","");
        s = s.replace("{}","")
    }
    if(s=== ""){
        return true;
    }
    return false;
}

// optimal aprpoach can be using stack
function optimalApproach(s){
  let stack =[];
  for(let char of s){
    if(char === "(" || char === "[" || char==="{"){
      stack.push(char);
    }else{
      if(stack.length === 0) return false;
      const top = stack.pop();
      if(top === "(" && char !== ")") return false;
      if(top === "[" && char !== "]") return false;
      if(top === "{" && char !== "}" )return false;
    }
  }
  if(stack.length === 0) return true;
  return false;
}