var pathSum = function (root, sum) {
  const res = []
  const path = []

  var recursion = function (root, sum) {
    if (!root) return

    path.push(root.val)
    let target = sum - root.val
    if (target === 0 && !root.left && !root.right) {
      res.push(Array.prototype.concat([], path))
    }
    recursion(root.left, target)
    recursion(root.right, target)
    path.pop()
  }

  recursion(root, sum)
  return res
};
