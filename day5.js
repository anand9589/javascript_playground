var filter = function(arr, fn) {
    let res = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
        if (fn(element, index)) {
            res.push(element)
        }
    }

    return res;
};