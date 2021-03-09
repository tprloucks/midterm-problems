function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0){
    return true
  }else{
      return false
    }
  }


// 
function halfSquare(num) {
  let sum = num/2;
  return sum;
}

function isLong(str) {
  if (str.length >= 15){
    return true
  }
  if  (str.length < 15){
    return false
  }
}
// 
function exclaim(str) {
  let numExclamationMarks = 0
  for (i=str.length -1; i <= 0; i-- ){
    if (str[i] === '!'){
      numExclamationMarks++;
    }else{
      break;
    }
  }
  let excalmationlessStr = '';
  for (let i=0; i < str.length - numExclamationMarks; i ++){
    excalmationlessStr += str[i];
  }
  return excalmationlessStr +'!';
  
}

function countWords(str) {
  let count = 1;
  for (let i = 0; i < str.length; i++){
    if (i === ""){
    count += 1;
    return count
    }else{
      return count = 1; 
    }
  }
    
  }


function containsDigit(str) {
  let doesContainsDigits = false;

  for (const char of str){
    if( 
      char === '0' ||
      char === '1' ||
      char === '2' ||
      char === '3' ||
      char === '4' ||
      char === '5' ||
      char === '6' ||
      char === '7' ||
      char === '8' ||
      char === '9' 
      ){
        doesContainsDigits = true
      }

  }
  return doesContainsDigits;
}

function containsLowerCase(str) {
  let doesContainLowerCase = false
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const char of str){
    if (letters.includes(char)){
      letters = true
    }
  
  }
    return doesContainLowerCase
  }

  function containsUpperCase(str) {
      let doesContainUpperCase = false
      let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (const char of str){
        if (letters.includes(char)){
          letters = true
        }
      
      }
        return doesContainUpperCase
      }
    

function containsNonAlphanumeric(str) {
  let doesContainNonAlphanumeric

  for (const char of str){
    const isDigit = containsDigit(char);
    const isUpperCaseLetter = containsUpperCase(char);
    const islowerCaseLetter = containsLowerCase(char);
    const isAlphanumeric = (
      isDigit || 
      isUpperCaseLetter|| 
      isLowerCaseLetter
    );
    if (!isAlphanumeric){
      doesContainNonAlphanumeric = true;
    }
    return doesContainNonAlphanumeric
  }
}

function containsSpace() {
  let doesContainSpace = false;
  for (const char of str){
    if (char === ' '){
      return doesContainSpace = true
    }else{
      return doesContainSpace
    }
  }
  
}

function digits() {
}

function truncate(str) {
  if (str.length < 15){
    return str;
  }
  else{
    let output = ''
    for (let i = 0;i < 8; i++){
      output += str[i]
    }
    output =+ '...';
    return output;
  }
}

function isValidPassword(str) {
  const doesContainUpperCase = containsUpperCase(str)
  const doesContainLowerCase = containsLowerCase(str)
  const doesContainDigit = containsDigit(str)
  const doesContainNonAlphanumeric = containsNonAlphanumeric(str)
  const doesContainSpace = containsUpperSpace(str)

  const isValid = (
    doesContainLowerCase &&
    doesContainNonAlphanumeric &&
    doesContainUpperCase &&
    doesContainDigit &&
    !doesContainSpace
  )
}

function onlyPunchy(titles) {
  let exclaimedTitles = [];
  for (const title of titles){
    const exclaimedTitle = exclaim(title);
    exclaimedTitles.push(exclaimedTitle)
  }
  let punchyTitles = []
  for(const title of exclaimedTitles){
    if (title.length < 15){
      punchyTitles.push(title)
    }
  }
  return punchyTitles
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}