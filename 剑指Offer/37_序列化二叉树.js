function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function (root) {
  const res = []
  const queue = []
  if (root) queue.push(root)
  while (queue.length) {
    root = queue.shift()
    if (!root) {
      res.push(null)
    } else {
      res.push(root.val)
      queue.push(root.left)
      queue.push(root.right)
    }
  }
  // 清楚末尾冗余的null（后续优化一下）
  let index = res.length - 1
  while (index >= 0 && res[index] === null) {
    index--
  }
  res.length = index + 1
  return res
};

var deserialize = function (data) {
  let len = data.length
  if (!len || data[0] === null) return null

  const root = new TreeNode(data[0])
  const queue = [root]

  let i = 1
  while (i < len) {
    let p = queue.shift()
    if (!p) continue

    p.left = data[i] === null ? null : new TreeNode(data[i])
    queue.push(p.left)
    i++

    if (i < len) {
      p.right = data[i] === null ? null : new TreeNode(data[i])
      queue.push(p.right)
      i++
    }
  }
  return root
};