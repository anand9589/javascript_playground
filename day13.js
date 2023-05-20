var promisePool = async function (functions, n) {
  let index = 0;

  async function callNext() {
    const currFunction = functions[index];

    if (currFunction) {
      index++;
      await currFunction();
      return callNext();
    }
  }

  return Promise.all(new Array(n).fill().map(callNext));
};

functions = [
  () => new Promise((res) => setTimeout(res, 300)),
  () => new Promise((res) => setTimeout(res, 400)),
  () => new Promise((res) => setTimeout(res, 200)),
];
n = 2;

var d = promisePool(functions, n);

d.forEach((element) => {
  element.then((x) => console.log(x));
});
