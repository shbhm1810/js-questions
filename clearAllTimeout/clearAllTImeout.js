const customTimeouts = (function () {
    const timeoutIds = []
    const setTimeout = function (fn, delay) {
        const id = window.setTimeout(fn, delay);
        timeoutIds.push(id)
        return id;
    }

    const clearAllTime = function () {
        while (timeoutIds.length) {
            clearInterval(timeoutIds[timeoutIds.length - 1]);
            timeoutIds.pop();
        }
    }

    return {
        setTimeout,
        clearAllTime
    }
})()

