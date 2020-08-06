// 1.层次遍历时打入'#'作为标记
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root, '#'], res = []
  let path = []
  while (queue.length) {
    cur = queue.shift()
    if (cur === '#') {
      res.push(path)
      path = []
      if (queue.length) queue.push('#')
      continue
    }
    path.push(cur.val)
    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }
  return res
};

// 2.层次遍历，转变为一次取n个
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root], res = []
  let path = [], sum
  while (queue.length) {
    sum = queue.length
    for (let i = 0; i < sum; i++) {
      cur = queue.shift()
      path.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push(path)
    path = []
  }
  return res
};