function persistence(num) {
  let digits = num.toString().split('');
  let len = digits.length;
  let pVal = 0; 
  
  while(len > 1){
    num = 1; 
    for(let i = 0; i < len; i++){
      num *= digits[i];
    }
    digits = num.toString().split('');
    len = digits.length;
    pVal++;
  }
  return pVal;
}