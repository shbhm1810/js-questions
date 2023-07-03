const singleton = (function () {
    let instance;

    function createInstance() {
        const obj = new Object('I am an instance')
        return obj
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance
        }
    }
})()

const object1 = singleton.getInstance();
const object2 = singleton.getInstance();

console.log(object1 === object2);