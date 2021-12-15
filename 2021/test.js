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
 
var rowIndex = 0;
var columnIndex = 0;
var path = [];
var nextIndexValue = 0;
var underIndexValue = 0
function isNextColumnIndexGreater(currentIndex, nextIndex) {
  return parseInt(currentIndex) < parseInt(nextIndex);
}
function isNextRowSameIndexGreater(currentIndex, rowIndex) {
  return parseInt(currentIndex) < parseInt(rowIndex);
}
function returnGreatestValue(currentIndex, nextIndex) {
  return parseInt(currentIndex) > parseInt(nextIndex) ? parseInt(currentIndex) : parseInt(nextIndex);
}

for (let i = 0; i < Matrix.length; i++) {
  const element = Matrix[i];
  if(i < Matrix.length -1) {
    for (let j = 0; j < element.length; j++) {
      const subElement = element[j];
      if(j < element.length -1) {
        if (isNextColumnIndexGreater(subElement,element[j+1])){
          nextIndexValue = parseInt(element[j+1]);
        }
        if (isNextRowSameIndexGreater(subElement,Matrix[i+1][j])){
          underIndexValue = parseInt(Matrix[i+1][j]);
        }
        if(nextIndexValue < underIndexValue){
          path.push(nextIndexValue);
          rowIndex = j+1;
        //   columnIndex = 0;
        }
        else {
          path.push(underIndexValue);
          columnIndex = i+1;
        //   rowIndex = 0;
          break;
        }
      }
      if(j === element.length -1){
        path.push(underIndexValue);
        columnIndex = i+1;
        // rowIndex = 0;
        break;
      }
    }
  }
  if(i === Matrix.length -1) {
    path.push(nextIndexValue);
    rowIndex++;
    // columnIndex = 0;
  }
}
console.log(path);
var score = 0;
path.forEach(element => {
  score += element;
});
console.log(score);