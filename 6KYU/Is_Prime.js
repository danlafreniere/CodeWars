function isPrime(num) {
  //Implementing the AKS primality test:
  if (num == 2 || num == 3){
    return true;
  } else if (num == 1 || num % 2 == 0 || num % 3 == 0 || num <= 0){
    return false; 
  }

  let i = 5; 
  let w = 2; 
  
  while (i * i <= num){
    if (num % i == 0){
      return false;
    }
    i += w;
    w = 6 - w; 
  }
  return true;
}