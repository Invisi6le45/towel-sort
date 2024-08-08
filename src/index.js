
// You should implement your task here.

/* module.exports =  */

function towelSort (matrix) {
  for (let i = 0; i <= matrix.length; i++) {
    for (let j = 0; j <= matrix[i].length; j++) {
      console.log (matrix[i][j]);
    }
  }


  return matrix;
}


let matr = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ];


let z = towelSort (matr);


