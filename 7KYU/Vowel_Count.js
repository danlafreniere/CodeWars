function getCount(str) {
  var vowelsCount = 0;
  let len = str.length;
  let chars = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < len; i++){
    if (chars.indexOf(str.charAt(i)) != -1){
      vowelsCount++;
    }
  }
  return vowelsCount;
}