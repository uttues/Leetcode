var findDisappearedNumbers = function (nums) {
  let len = nums.length, res = [], temp

  for (let i = 0; i < len; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      res.push(i + 1)
    }
  }
  return res
};
