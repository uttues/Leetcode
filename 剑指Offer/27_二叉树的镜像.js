// 剑指 Offer 27. 二叉树的镜像 https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/

var mirrorTree = function (root) {
  if (!root) return null
  // 添加了下面这个条件可以直接减少很多递归的操作~
  if (!root.left && !root.right) return root

  let p = root.left
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(p)

  return root
};