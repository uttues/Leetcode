function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 递归
var mergeTrees = function (r1, r2) {
  if (!r1) return r2
  if (!r2) return r1

  let p = new TreeNode(r1.val + r2.val)
  p.left = mergeTrees(r1.left, r2.left)
  p.right = mergeTrees(r1.right, r2.right)

  return p
};
