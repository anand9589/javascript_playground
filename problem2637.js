//2637. Promise Time Limit

var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, err) => {
      setTimeout(() => err("Time Limit Exceeded"), t);
      fn(...args).then(res, err);
    });
  };
};

var fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

let input = 5;
let time = 50;

var k = fn(5);
var p = timeLimit(k, time);

console.log(p);
