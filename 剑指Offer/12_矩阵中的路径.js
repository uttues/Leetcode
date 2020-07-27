var exist = function (board, word) {
  for (let i = 0, row = board.length; i < row; i++) {
    for (let j = 0, col = board[0].length; j < col; j++) {
      if (dfs(board, word, i, j, 0)) return true
    }
  }
  return false
};

var dfs = function (board, word, i, j, k) {
  // 递归终点（成功/失败）
  if ((i < 0 || i >= board.length) || (j < 0 || j >= board[0].length) || board[i][j] !== word[k]) return false
  if (k === word.length - 1) return true

  // 本层逻辑
  let store = board[i][j]
  board[i][j] = '/'

  // 向下层递归
  let res = dfs(board, word, i - 1, j, k + 1) || dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i, j - 1, k + 1) || dfs(board, word, i, j + 1, k + 1)

  // 回溯（数据修复)
  board[i][j] = store // 回溯

  // 返回结果
  return res
}

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));