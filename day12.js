//2637. Promise Time Limit

var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      setTimeout(() => rej("Time Limit Exceeded"), t);
      fn(...args).then(rej, res);
    });
  };
};

fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const s = fn(5);

const limited = timeLimit(s, 50);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
