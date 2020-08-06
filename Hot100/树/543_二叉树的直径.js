function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 思路一：纯递归
var maxDepth = function (root) {
  if (!root) return 0
  if (root.height) return root.height // 返回缓存
  root.height = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  return root.height
}
var diameterOfBinaryTree = function (root) {
  if (!root || (!root.left && !root.right)) return 0
  let lenMid = maxDepth(root.left) + maxDepth(root.right)
  return Math.max(lenMid, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))
};

// 思路二：递归+公共变量存储
var diameterOfBinaryTree = function (root) {
  let maxPath = 0

  let maxDepth = function (root) {
    if (!root) return 0
    let L = maxDepth(root.left)
    let R = maxDepth(root.right)
    maxPath = Math.max(L + R, maxPath)
    return Math.max(L, R) + 1
  }

  maxDepth(root)
  return maxPath
}