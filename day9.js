function memoize(fn) {
    const cache = {};
    return function(...args) {
        const params = JSON.stringify(args);

        if(params in cache)
             return cache[params];

        const result = fn (...args);
        cache[params] = result;

        return result;

    }
}