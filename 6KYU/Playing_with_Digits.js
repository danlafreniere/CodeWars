function digPow(n, p){
  let digits = n.toString().split('');
  let len = digits.length;
  let sum = 0; 
  for (let i = 0; i < len; i ++){
    sum += Math.pow(digits[i], p);
    p++;
  }
  return (sum / n) % 1 === 0 ? (sum / n) : -1;
}