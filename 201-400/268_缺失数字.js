var missingNumber = function (nums) {
  let len = nums.length

  // 遍历数组，目的：让  nums[i] = nums[nums[i]]
  for (let i = 0; i < len; i++) {
    // nums[i]没有放在正确的位置上
    while (nums[i] !== nums[nums[i]]) {
      temp = nums[nums[i]]
      nums[nums[i]] = nums[i]
      nums[i] = temp
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return len
}