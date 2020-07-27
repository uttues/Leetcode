var reverseLeftWords = function (s, n) {
  let arr = s.split('')
  return Array.prototype.concat(arr.slice(0, n).reverse(), arr.slice(n).reverse()).reverse().join('')
};

var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n)
};

var reverseLeftWords = function (s, n) {
  let len = s.length
  let arr = new Array(len)
  for (let i = 0; i < len; i++) {
    arr[(i + len - n) % len] = s[i]
  }
  return arr.join('')
};
console.log(reverseLeftWords('abcdefg', 2));