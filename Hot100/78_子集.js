var subsets = function (nums) {
  const res = []
  const path = []
  const len = nums.length

  const recursion = function (i) {
    // 递归终结条件（不能够把i===len放在本层逻辑中处理，因为会多次反复调用）
    if (i >= len) return

    // 处理本层逻辑
    // 1.不加该元素
    if (i === len - 1) res.push(path.slice(0))
    else recursion(i + 1)

    // 2.添加该元素
    path.push(nums[i])
    if (i === len - 1) res.push(path.slice(0))
    else recursion(i + 1)
    path.pop()
  }

  recursion(0)
  return res
};

console.log(subsets([1, 2, 3]));