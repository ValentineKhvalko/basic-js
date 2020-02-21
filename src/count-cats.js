module.exports = function countCats(arr) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if (arr[i][j] === '^^') {
        count++;
      }
    }
  }
  return count;
};
