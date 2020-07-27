var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false
  let row = matrix.length
  let line = matrix[0].length

  let i = row - 1, j = 0

  while (i >= 0 && j <= line - 1) {
    if (matrix[i][j] === target) return true
    if (matrix[i][j] < target) j++
    else i--
  }
  return false
};