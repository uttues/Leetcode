var sumOfPoint = function (a, b) {
  let s1 = String(a).split('').reduce((prev, val) => prev += Number(val), 0)
  let s2 = String(b).split('').reduce((prev, val) => prev += Number(val), 0)
  return s1 + s2
}

var movingCount = function (m, n, k) {
  // 创建二维数组
  let board = new Array(m).fill(0).map(val => new Array(n).fill(0)) // 如果前一个不加上fill(0)则会报错
  // let board = Array.from({ length: m }).map(val => Array.from({ length: n }).fill(0))

  var recursion = function (i, j) {
    // 越界|走过|不能进入
    if ((i < 0 || i >= m) || (j < 0 || j >= n) || board[i][j] === '/' || sumOfPoint(i, j) > k) return

    // 本层处理逻辑
    // console.log(i, j);
    // console.log(board);
    board[i][j] = '/'

    // 递归进入下一层
    recursion(i - 1, j)
    recursion(i + 1, j)
    recursion(i, j - 1)
    recursion(i, j + 1)
  }

  recursion(0, 0)

  let sum = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '/') sum++
    }
  }
  return sum
};