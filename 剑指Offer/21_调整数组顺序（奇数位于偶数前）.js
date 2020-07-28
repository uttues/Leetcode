var exchange = function (nums) {
  let len = nums.length, left = 0, right = len - 1, temp
  while (left < right) {
    while ((nums[left] & 1) === 1 && left < len - 1) left++
    while ((nums[right] & 1) === 0 && right > 0) right--
    if (left < right) {
      temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
    }
  }
  return nums
};