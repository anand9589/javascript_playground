    var map = function(arr, fn) {
        let res = [];

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            res.push(fn(element, index));
        }

        return res;
    };