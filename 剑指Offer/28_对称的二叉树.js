var isSymmetric = function (root) {
  if (!root) return true
  return inContrary(root.left, root.right)
};

var inContrary = function (A, B) {
  if (!A && !B) return true
  if (!A || !B) return false

  return A.val === B.val && inContrary(A.left, B.right) && inContrary(A.right, B.left)
}