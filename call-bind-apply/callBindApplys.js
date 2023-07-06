
//Bind function using Apply
Function.prototype.myBind = function () {
    const callerFunction = this;
    const [thisContext, ...args] = arguments;
    return function () {
        return callerFunction.apply(thisContext, args);
    }
}


//Call function using bind

Function.prototype.myCall = function () {

    const callerFunction = this;
    const [thisContext, ...args] = arguments;
    const bindedFunction = callerFunction.bind(thisContext, ...args);
    bindedFunction();

}

