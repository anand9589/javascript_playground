async function sleep(millis) {
  await new Promise((res) => setTimeout(res, millis));
}

console.log(new Date());
sleep(2000).then(() => console.log(new Date()));
console.log(new Date());
