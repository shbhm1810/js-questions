const throttle = (fn,delay) => {
    let prev = 0;

    return function () {
        const context = this;
        const args = arguments;
        let now = new Date().getTime()

        if(now-prev > delay)
        {
            prev = now;
            fn.call(this,arguments)
        }

    }
}