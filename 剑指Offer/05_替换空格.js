var replaceSpace = function (s) {
  return s.split(' ').join('%20')
};

var replaceSpace = function (s) {
  return Array.from(s).map(value => value === ' ' ? '%20' : value).join('')
};
