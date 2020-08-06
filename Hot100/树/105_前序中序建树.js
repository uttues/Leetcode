var buildTree = function (preorder, inorder) {
  var recur = function (a, b, c, d) {
    if (a > b) return null
    let root = new TreeNode(preorder[a])
    let t = c
    while (inorder[t] !== preorder[a]) {
      t++
    }
    let L = t - c
    root.left = recur(a + 1, a + L, c, t - 1)
    root.right = recur(a + L + 1, b, t + 1, d)
    return root
  }
  return recur(0, preorder.length - 1, 0, inorder.length - 1)
};