module.exports = function check(str, bracketsConfig) {
  let brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
    '2': '1',
    '4': '3',
    '6': '5'
  }
  let ones = ['(', '{', '[', '1', '3', '5'];
  let dubles = ['|', '7', '8'];   
  let result = [];

  let arr = str.split('');
  for (let i=0; i<arr.length; i++) {
      if (dubles.includes(arr[i])) {
          if (arr[i]==result[result.length-1]) {
              result.pop(arr[i]);
          } else {
              result.push(arr[i]);
              }             
      } else { 
          if (ones.includes(arr[i])) {
          result.push(arr[i]); 
          } else {
              if (result.length==0) {
                  return false
              } else {
                  let n ='';
              for (key in brackets) {
                  if (key==arr[i]) {
                      n = brackets[key];
                  }
              }         
              if (n==result[result.length-1]) {
                  result.pop(arr[i])
              }
              }
            }
      }
  } 
  if (result.length==0) {
      return true;
  } else {
      return false;
  }
}