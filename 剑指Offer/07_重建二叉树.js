// 剑指 Offer 07. 重建二叉树 https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null

  let rootVal = preorder[0]
  let index = 0
  while (inorder[index] !== rootVal) {
    index++
  }
  let root = new TreeNode(rootVal)
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  return root
};



// 196 ms => 116 ms
// 112 MB => 42 MB
// 优化点1：使用哈希表来预存储中序遍历中值和索引的关系 => 根据前序遍历的值就能够获取其在中序遍历中的下标
// 优化点2：将slice数组转变为传数组编号
// Tips：另外创建一个函数！
// Tips：数组循环遍历方法中性能最高的一种，优化思路：缓存长度 for(j = 0,len=arr.length; j < len; j++) { }
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
  const map = new Map()
  const len = preorder.length

  // 哈希表预存储，之后可以通过map.get(preorder[j])取值
  for (let j = 0; j < len; j++) {
    map.set(inorder[j], j)
  }
  return recursion(map, preorder, inorder, 0, len - 1, 0, len - 1);
};

var recursion = function (map, preorder, inorder, preLow, preHigh, inLow, inHigh) {
  if (preLow > preHigh) return null

  let inIndex = map.get(preorder[preLow])
  let leftSize = inIndex - inLow

  let root = new TreeNode(preorder[preLow])
  root.left = recursion(map, preorder, inorder, preLow + 1, preLow + leftSize, inLow, inIndex - 1)
  root.right = recursion(map, preorder, inorder, preLow + leftSize + 1, preHigh, inIndex + 1, inHigh)
  return root
}