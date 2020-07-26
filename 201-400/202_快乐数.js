var squareNum = function (n) {
  return String(n).split('').reduce((prev, value) => prev + Math.pow(Number(value), 2), 0)
}
var isHappy = function (n) {
  if (n === 1) return true
  let fast = n, slow = n

  while (squareNum(fast) !== 1 && squareNum(squareNum(fast)) !== 1) {
    fast = squareNum(squareNum(fast))
    slow = squareNum(slow)

    if (slow === fast) return false
  }
  return true
};