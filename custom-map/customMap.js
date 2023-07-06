Array.prototype.myMap = function (fn) {

    const orignalArray = this;

    let newArray = []

    for (let index = 0; index < orignalArray.length; index++) {
        newArray.push(fn.call(orignalArray, orignalArray[index]));
    }

    return newArray

}
