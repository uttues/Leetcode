var missingNumber = function (nums) {
  let temp
  // 遍历数组，目的：下标i的位置上放着数字i
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === i) continue
    // 循环中：让nums[i] 放到它该在的地方（nums[nums[i]]===nums[i]）
    while (nums[i] !== undefined && nums[i] !== i) {
      temp = nums[nums[i]]
      nums[nums[i]] = nums[i]
      nums[i] = temp
    }
  }
  // 数组中必然有某一个数与nums[n] 交换了，那么该数组下标上的数就是undefined，说明该下标值是缺失的
  let res = nums.findIndex(value => value === undefined)
  return res === -1 ? nums.length : res
}
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));