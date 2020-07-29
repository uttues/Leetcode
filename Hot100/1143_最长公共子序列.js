var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length, len2 = text2.length
  // let path = []  // 回溯
  // i==0||j==0 标识空串 dp[0][0] 表示什么都无，所以dp数组应多开一圈
  let dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        // path.push(text1[i - 1]) // 回溯
      }
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  // console.log(path.join('')); // 回溯
  return dp[len1][len2]
};

// 递归是会超时的，可以理解一下~
// var longestCommonSubsequence = function (text1, text2) {
//   let len1 = text1.length, len2 = text2.length

//   const recursion = function (i, j) {
//     if (i === -1 || j === -1) return 0

//     if (text1[i] === text2[j]) {
//       return 1 + recursion(i - 1, j - 1)
//     } else {
//       return Math.max(recursion(i - 1, j), recursion(i, j - 1))
//     }
//   }
//   return recursion(len1 - 1, len2 - 1)
// };

console.log(longestCommonSubsequence('abcde', 'ace'));