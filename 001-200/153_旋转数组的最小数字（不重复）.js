// 思路：另类二分:通过缩小数组去查找结果（重复的也能处理）
// var minArray = function (numbers) {
//   let len = numbers.length
//   if (len === 0) return 0

//   let low = 0, high = len - 1, mid
//   while (low < high) {
//     mid = low + (high - low) >> 1
//     console.log(mid);
//     // 右边有序：则满足的范围缩小
//     if (numbers[mid] < numbers[high]) high = mid
//     else if (numbers[mid] > numbers[high]) low = mid + 1
//     else high--

//   }
//   return numbers[low]
// };
var findMin = function (nums) {
  let len = nums.length
  if (len === 1 || nums[0] < nums[len - 1]) return nums[0]

  let low = 0, high = len - 1, mid
  while (low <= high) {
    mid = low + ((high - low) >>> 1)

    if (nums[mid - 1] > nums[mid]) return nums[mid]
    if (nums[0] <= nums[mid]) low = mid + 1
    else high = mid - 1
  }
  return
};
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));