var findRepeatNumber = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    // 将 nums[i] 放到 nums[nums[i]] 上
    while (nums[i] !== nums[nums[i]]) {
      temp = nums[nums[i]]
      nums[nums[i]] = nums[i]
      nums[i] = temp
    }
    if (nums[i] === nums[nums[i]] && i !== nums[i]) {
      return nums[i]
    }
  }
  return -1
}