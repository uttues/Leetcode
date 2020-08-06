function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 1.反序中序遍历+递归
var convertBST = function (root) {
  let sum = 0

  let recursion = function (p) {
    if (!p) return null

    recursion(p.right)
    sum += p.val
    p.val = sum
    recursion(p.left)

    return p
  }

  return recursion(root)
};

// 2.反序中序遍历+栈迭代（递归思想）
var convertBST = function (root) {
  if (!root) return null

  let sum = 0, cur = root
  const stack = []
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.right
    }
    cur = stack.pop()
    sum += cur.val
    cur.val = sum
    cur = cur.left
  }

  return root
};

