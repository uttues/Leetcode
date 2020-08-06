// 1.暴力递归
var rob = function (root) {
  if (!root) return 0

  if (!root.left && !root.right) return root.val

  // 左右两树可获得的利益（不跳）
  let L = rob(root.left)
  let R = rob(root.right)
  // 左右两树可获得的利益（跳一格）
  let LSkip = root.left ? rob(root.left.left) + rob(root.left.right) : 0
  let RSkip = root.right ? rob(root.right.left) + rob(root.right.right) : 0

  // 要么取根节点，要么不取
  return Math.max(LSkip + RSkip + root.val, L + R)
};



// 2.暴力递归优化，记忆化解决重复子问题
var rob = function (root) {
  let store = new Map()

  var maxRob = function (root) {
    if (!root) return 0
    if (store.has(root)) return store.get(root)

    if (!root.left && !root.right) {
      store.set(root, root.val)
      return root.val
    }

    // 左右两树可获得的利益（不跳）
    let L = maxRob(root.left)
    let R = maxRob(root.right)
    // 左右两树可获得的利益（跳一格）
    let LSkip = root.left ? maxRob(root.left.left) + maxRob(root.left.right) : 0
    let RSkip = root.right ? maxRob(root.right.left) + maxRob(root.right.right) : 0

    // 要么取根节点，要么不取
    store.set(root, Math.max(LSkip + RSkip + root.val, L + R))
    return store.get(root)
  }

  return maxRob(root)
};


// 3.递归不返回最优，更灵活
var rob = function (root) {
  // 返回数组[a, b], a表示取根，b表示不取根
  var optionalRob = function (root) {
    if (!root) return [0, 0]

    if (!root.left && !root.right) return [root.val, 0]

    // 左右两树可获得的利益：r1[0]表示左子树取根最佳，r1[1]表示左子树不取根最佳
    let left = optionalRob(root.left)
    let right = optionalRob(root.right)

    // 要么取根节点，要么不取(爷爷不取的时候，父亲可取可不取)
    return [left[1] + right[1] + root.val, Math.max(left[0], left[1]) + Math.max(right[0], right[1])]
  }
  let res = optionalRob(root)
  return Math.max(res[0], res[1])
};