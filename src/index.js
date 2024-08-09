
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  console.log (matrix.length);

  if (matrix.length === 0 || matrix === 0){
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      
      
      if ( i === 0 ) {
        for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j])
        }
        console.log ('Массив result: ' + result);
      } else {

        if ( i % 2 !== 0) {
          for (let j = (matrix[i].length-1) ; j >= 0; j--) {
            result.push(matrix[i][j])
          }  
          console.log ('Массив result: ' + result);
        } else {
          for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j])
            console.log ('Массив result: ' + result);
          }
        }
      }











      
    }
  }
  
  console.log (matrix);
  console.log (result);  
  return result;
}
