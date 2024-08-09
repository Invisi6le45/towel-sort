
// You should implement your task here.

module.exports = function towelSort (matrix) {


  let result = [];
  
  if (!matrix){
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if ( i === 0 ) {
        for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j])
        }
      } else {
        if ( i % 2 !== 0) {
          for (let j = (matrix[i].length-1) ; j >= 0; j--) {
            result.push(matrix[i][j])
          }  
        } else {
          for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j])
          }
        }
      }
    }
  }
  

  console.log ('Одномерный выходной массив имеет вид: ' + result);  
  return result;
}


let matr = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ];


let z = towelSort (matr);


