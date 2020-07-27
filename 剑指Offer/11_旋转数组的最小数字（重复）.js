
var minArray = function (numbers) {
  let len = numbers.length
  if (len === 0) return 0

  let low = 0, high = len - 1, mid
  while (low < high) {
    mid = low + (high - low) >> 1
    console.log(mid);
    // 右边有序：则满足的范围缩小
    if (numbers[mid] < numbers[high]) high = mid
    else if (numbers[mid] > numbers[high]) low = mid + 1
    else high--

  }
  return numbers[low]
};