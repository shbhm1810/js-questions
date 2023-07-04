const memoize = function (fn) {
    const cache = {};

    return function () {
        console.log(arguments)
        //arg as key to store the result
        const KEY = JSON.stringify(arguments);

        if (cache[KEY]) {
            return cache[KEY]
        }
        //else compute and store the result and return the result
        const evaluatedValue = fn(...arguments);
        cache[KEY] = evaluatedValue;
        return evaluatedValue;
    }
};

