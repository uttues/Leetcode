// 1.类似莫利斯遍历的二叉树展开（遍历）
var flatten = function (root) {
  if (!root) return null
  let cur = root, pre, tmp
  while (cur) {
    if (cur.left) {
      tmp = cur.left

      pre = cur.left
      while (pre.right) {
        pre = pre.right
      }
      pre.right = cur.right   // 将根节点的右子树移动到左子树的最右上
      cur.right = tmp   // 将根节点的左子树移动到根节点的右子树上
      cur.left = null
    }
    cur = cur.right
  }
};

// 2.递归
var flatten = function (root) {
  if (!root) return

  flatten(root.left)
  flatten(root.right)

  let temp = root.right // 暂存右子树
  root.right = root.left  // 左子树右移
  root.left = null
  // 退出循环时root为最右结点
  while (root.right) {
    root = root.right
  }
  root.right = temp
}
