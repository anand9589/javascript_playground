//2648. Generate Fibonacci Sequence

var fibGenerator = function* () {
  var a = 0;
  var b = 1;

  yield a;
  yield b;

  while (true) {
    var c = a + b;
    yield c;
    a = b;
    b = c;
  }
};

const gen = fibGenerator();

for (let index = 0; index < 5; index++) {
  console.log(gen.next);
}
