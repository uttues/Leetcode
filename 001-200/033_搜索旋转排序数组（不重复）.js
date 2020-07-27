var search = function (nums, target) {
  let len = nums.length
  if (len === 0) return -1
  
  let low = 0, high = len - 1, mid
  while (low <= high) {
    mid = low + ((high - low) >>> 1)

    if (nums[mid] === target) return mid

    if (nums[low] <= nums[mid]) {
      if ((nums[low] <= target && target <= nums[mid])) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    else {
      if ((nums[mid] <= target && target <= nums[high])) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
  return -1
};