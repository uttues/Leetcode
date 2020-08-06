function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 递归
var invertTree = function (root) {
  if (!root) return null

  let temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)

  return root
};