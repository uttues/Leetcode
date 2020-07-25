var findRepeatNumber = function (nums) {
  // 遍历数组，目的：每一个数都要放在自己的位置上 nums[i] === i
  for (let i = 0, len = nums.length; i < len; i++) {
    console.log(`i=${i}`);
    if (nums[i] === i) {
      continue
    }
    // 执行后面这段代码，说明此时nums[i]所在位置不是它应该在的，它应该在下标nums[i]处，如果现在发现nums[i]下标处有个跟它一样的值，则说明出现重复
    if (nums[i] === nums[nums[i]]) return nums[i] // 表示重复数

    // 目的：让nums[i]放到它应该在的位置上 nums[nums[i]] = nums[i]
    temp = nums[nums[i]]
    nums[nums[i]] = nums[i]
    nums[i] = temp
    console.log(nums);
  }
  return -1
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));