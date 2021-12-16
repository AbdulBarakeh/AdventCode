var Matrix = [
["1","1","6","3","7","5","1","7","4","2"],
["1","3","8","1","3","7","3","6","7","2"],
["2","1","3","6","5","1","1","3","2","8"],
["3","6","9","4","9","3","1","5","6","9"],
["7","4","6","3","4","1","7","1","1","1"],
["1","3","1","9","1","2","8","1","3","7"],
["1","3","5","9","9","1","2","4","2","1"],
["3","1","2","5","4","2","1","6","3","9"],
["1","2","9","3","1","3","8","5","2","1"],
["2","3","1","1","9","4","4","5","8","1"]
];   
var obj = [{}]
var rowIndex = 0;
var columnIndex = 0;
var path = [];
var nextIndexValue = 0;
var underIndexValue = 0;
function isNextColumnIndexGreater(currentIndex, nextIndex) {
  return parseInt(currentIndex) < parseInt(nextIndex);
}
function isNextRowSameIndexGreater(currentIndex, rowIndex) {
  return parseInt(currentIndex) < parseInt(rowIndex);
}
function returnGreatestValue(currentIndex, nextIndex) {
  return parseInt(currentIndex) > parseInt(nextIndex) ? parseInt(currentIndex) : parseInt(nextIndex);
}
// console.log("Matrix: " +Matrix.length)
// console.log("RowIndex: " +rowIndex)

while (rowIndex < Matrix.length -1 ) {

  nextIndexValue = parseInt(Matrix[rowIndex][columnIndex+1])
  underIndexValue = parseInt(Matrix[rowIndex+1][columnIndex])

  if(nextIndexValue >= underIndexValue){
    path.push(underIndexValue)
    rowIndex++
  }else if(nextIndexValue < underIndexValue){
    path.push(nextIndexValue)
    columnIndex++;
  }

  obj.push({rowIndex,columnIndex})
}

console.log(path);
var score = 0;
path.forEach(element => {
  score += element;
});
console.log(score);
console.dir(obj);