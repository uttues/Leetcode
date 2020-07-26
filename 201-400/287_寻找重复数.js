// 快慢指针解法
// 思路：看成是一个环，如果有相同的数，则必然有环存在

var findDuplicate = function (nums) {
  let fast = 0, slow = 0

  while (1) {
    fast = nums[nums[fast]]
    slow = nums[slow]

    if (fast === slow) {
      fast = 0
      while (fast !== slow) {
        fast = nums[fast]
        slow = nums[slow]
      }
      return fast
    }
  }
};

// 原地哈希
// 将数组当作是哈希表 nums[i] = nums[nums[i]-1]
var findDuplicate = function (nums) {
  let temp

  for (let i = 0, len = nums.length; i < len; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
    if (nums[i] === nums[nums[i] - 1] && i !== nums[i] - 1) {
      return nums[i]
    }
  }
};