function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 递归
var isValidBST = function (root) {
  let isVaildBSTWithRange = function (root, low, high) {
    if (!root) return true

    if (root.val >= high || root.val <= low) return false

    return isVaildBSTWithRange(root.left, low, root.val) && isVaildBSTWithRange(root.right, root.val, high)
  }
  return isVaildBSTWithRange(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};

// 中序遍历+栈迭代
var isValidBST = function (root) {
  let cur = root, pre = Number.NEGATIVE_INFINITY
  const stack = []
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    if (cur.val <= pre) return false
    pre = cur.val
    cur = cur.right
  }
  return true
}