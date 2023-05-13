var createCounter = function(init) {
    
    let counter = init; 
    function increment() {
        return ++counter;
    }

    function reset(params) {
       return counter = init;
    }

    function decrement(params) {
        return --counter;
    }

    return {
        increment,
        decrement,
        reset
    };
};