// 剑指 Offer 26. 树的子结构 https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
// 1.时间复杂度 O(MN) 其中 M,N 分别为树 A 和 树 B 的节点数量；先序遍历树 A 占用 O(M) ，每次调用 isContain(A, B) 判断占用 O(N)
// 2.空间复杂度 O(M) 当树 A 和树 B 都退化为链表时，递归调用深度最大。当 M≤N 时，遍历树 A 与递归判断的总递归深度为 MM ；当 M>N 时，最差情况为遍历至树 A 叶子节点，此时总递归深度为 M。

var isSubStructure = function (A, B) {
  if (!B || !A) return false
  // 本质上是个前序遍历？ 
  return isContain(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isContain = function (A, B) {
  // B中可以有A没有的结点~
  if (!B) return true
  // A中不能没有B有的结点
  if (!A) return false

  return (A.val === B.val) && isContain(A.left, B.left) && isContain(A.right, B.right)
}