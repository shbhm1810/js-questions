

class CustomPromise {

    constructor(executorFunction) {

        this.status = 'Pending'
        this.value = null

        this.onResolve = this.onResolve.bind(this)
        this.onReject = this.onReject.bind(this)
        try {
            executorFunction(this.onResolve, this.onReject)
        }
        catch {
            this.onReject();
        }

    }

    then(onFulfilled, onRejected) {

        if (this.status === 'Pending') {
            this.resolvedCallbacks = onFulfilled;
            this.rejectedCallbacks = onRejected;
        }

        if (this.status === "Resolved") {
            onFulfilled(this.value);
        }

        if (this.status === "Rejected") {
            onRejected(this.value);
        }
    }

    catch(onRejected) {
        if (this.status === 'Pending') {
            this.rejectedCallbacks = onRejected;
        }

    }

    onResolve(value) {
        if (this.status === 'Pending') {
            this.status = 'Resolved'
            this.value = value;
            this.resolvedCallbacks(this.value)
        }

    }

    onReject(value) {
        if (this.status === 'Pending') {
            this.status = 'Rejected'
            this.value = value;
            this.rejectedCallbacks(this.value)
        }
    }

}

const p1 = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected !!!');
    }, 3000)
});

p1.then((res) => {
    console.log('Inside then', res);
}, (err) => {
    console.log(err);
});