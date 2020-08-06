function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 思路一：递归
var inorderTraversal = function (root) {
  if (!root) return []

  let res = []
  var traversal = function (root) {
    if (!root) return
    traversal(root.left)
    res.push(root.val)
    traversal(root.right)
  }
  traversal(root)
  return res
};

// 思路二：栈迭代
var inorderTraversal = function (root) {
  if (!root) return []
  const stack = [], res = []
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
};

// 思路三：莫利斯遍历（Morris），常数级空间
var inorderTraversal = function (root) {
  if (!root) return []
  const res = []
  let pre, temp
  while (root) {
    if (root.left) {
      // 让pre指针指向左子树的最右结点，将根节点移到其左子树的最右边
      pre = root.left
      while (pre.right) {
        pre = pre.right
      }
      pre.right = root

      // 修改根节点，去除新旧根节点的联系
      temp = root
      root = root.left
      temp.left = null
    } else {
      res.push(root.val)
      root = root.right
    }
  }
  return res
}
