// 思路一：遍历+二分法
// var BinarySearch = function (nums, n) {
//   console.log(nums);
//   let len = nums.length
//   if (len === 0) return false

//   let low = 0, high = len - 1, mid
//   while (low <= high) {
//     mid = low + ((high - low) >>> 1)

//     if (nums[mid] === n) return true
//     if (nums[mid] < n) low = mid + 1
//     else high = mid - 1
//   }
//   return false
// }
// var twoSum = function (nums, target) {
//   let len = nums.length

//   for (let i = 0; i < len; i++) {
//     // 如果用 nums.slice(i) 会导致超时
//     if (BinarySearch(nums, target - nums[i])) {
//       return [nums[i], target - nums[i]]
//     }
//   }
//   return []
// };

// 思路二：hashMap O(n) O(n)
// var twoSum = function (nums, target) {
//   let map = new Map()
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     map.set(nums[i], i)
//   }
//   console.log(map);
//   for (let i = 0; i < len; i++) {
//     if (map.get(target - nums[i]) !== undefined) {
//       return [nums[i], target - nums[i]]
//     }
//   }
//   return []
// }

// 思路三：对撞双指针
// var twoSum = function (nums, target) {
//   let left = 0, right = nums.length - 1, res
//   while (left !== right) {
//     res = target - nums[left]
//     if (res === nums[right]) return [nums[left], nums[right]]
//     if (res > nums[right]) left++
//     else right--
//   }
//   return []
// }

// 思路四：对撞双指针+二分法加速
var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1, res, mid, resBinary
  while (left !== right) {
    res = nums[left] + nums[right]

    if (target === res) return [nums[left], nums[right]]

    mid = left + ((right - left) >>> 1)
    if (target > res) {
      // 判断左指针是否加速
      resBinary = nums[mid] + nums[right]

      if (target === resBinary) return [nums[mid], nums[right]]
      if (target > resBinary) left = mid
      else left++

    } else {
      // 判断右指针是否加速
      resBinary = nums[left] + nums[mid]

      if (target === resBinary) return [nums[left], nums[mid]]
      if (target < resBinary) right = mid
      else right--
    }
  }
  return
}

console.log(twoSum([10, 26, 30, 31, 47, 60], 40));