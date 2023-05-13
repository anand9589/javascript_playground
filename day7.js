var compose = function(functions) {
	return function(x) {
        return  functions.reduceRight((acc,f)=>f(acc),x)
    }
};


 const fn = compose([x => x + 1, x => 2 * x])
 let k = fn(4) // 9
console.log(k);