// 思路一：分割后数组存储+逐位解析
var compareVersion = function (version1, version2) {
  let arr1 = version1.split('.').map(val => Number(vahhal))
  let arr2 = version2.split('.').map(val => Number(val))
  for (let i = 0, count = arr1.length - arr2.length; i < Math.abs(count); i++) {
    if (count > 0) arr2.push(0)
    else arr1.push(0)
  }
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] > arr2[i]) return 1
    if (arr1[i] < arr2[i]) return -1
  }
  return 0
};
