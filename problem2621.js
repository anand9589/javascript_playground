async function sleep(millis) {
    await new Promise(res=>setTimeout(res, millis));
}

async function demo(){
console.log(new Date().toISOString());
await sleep(2000);
console.log(new Date().toISOString());
}

demo()