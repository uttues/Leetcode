// var threeSum = function (nums) {
//   let res = []
//   let path = []
//   let len = nums.length
//   nums = nums.sort()
//   console.log(nums);

//   // j表示本轮的三元组下标，k表示当前可选的数组起点，sum表示当前的path和
//   var recursion = function (j, k, sum) {
//     if (len + j - k < 3) return
//     switch (j) {
//       case 2:
//         for (let i = k; i < len; i++) {
//           if (nums[i] === -sum) {
//             console.log(sum);
//             path.push(nums[i])
//             console.log(path);
//             res.push(path)
//             path.pop()
//             break
//           }
//         }
//       default:
//         for (let i = j; i < len; i++) {
//           path.push(nums[i])
//           recursion(j + 1, i + 1, sum + nums[i])
//           path.pop()
//         }
//     }
//   }
//   recursion(0, 0, 0)
//   return res
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));




for (let i = 0; i < 3; i++, console.log(i)) {
  let i = 'abc';
  console.log(i, ',,');
}   //打印结果为 abc 1 abc 2 abc 3