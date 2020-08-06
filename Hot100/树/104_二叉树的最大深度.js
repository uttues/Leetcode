// 递归
var maxDepth = function (root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};