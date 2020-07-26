var firstMissingPositive = function (nums) {
  let len = nums.length, temp

  // 遍历数组，目的：让  nums[i] = nums[nums[i] - 1]
  for (let i = 0; i < len; i++) {
    // nums[i]在指定范围之内(1-nums[i])，但没有放在正确的位置上
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
      temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return len + 1
};