function findOutlier(integers){
  let evens = [];
  let odds = [];
  let len = integers.length;
  for (let i = 0; i < len; i++){
    if (integers[i] % 2 == 0){
      evens.push(integers[i]);
    } else {
      odds.push(integers[i]);
    }
  }
  return (evens.length === 1) ? evens[0] : odds[0];
}