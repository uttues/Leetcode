var findRepeatNumber = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === nums[nums[i]] && i !== nums[i]) {
      return nums[i]
    }
    if (nums[i] === i) {
      continue
    }
    while (nums[i] !== nums[nums[i]]) {
      temp = nums[nums[i]]
      nums[nums[i]] = nums[i]
      nums[i] = temp
    }
  }
  return -1
}