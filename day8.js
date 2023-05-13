

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return {calls:1, value:fn(...args)};
        }
        else{
            return undefined;
        } 
        
    }
};
  
  const fn = (a, b, c) => a + b + c;
  const calls = [[1, 2, 3], [2, 3, 6]];
  
  const onceFn = once(fn);
  console.log(onceFn(...calls[0])); // Output: { calls: 1, value: 6 }
  console.log(onceFn(...calls[1])); // Output: undefined