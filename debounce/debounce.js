const debounce = (fn,delay) => {
    let debouceIntervalId

    return function(){
        const context = this;
        const args = arguments;

        clearTimeout(debouceIntervalId)

        debouceIntervalId=setTimeout(() => {
            fn.apply(context,args)
        },delay)
       
    }


}

// With normal javascript functions, 
//`this` is bound when the function is called. With arrow functions,
// `this` is bound to the context in which the function is originally created.