Array.prototype.insertAtIndex = function () {
    const arr = this;
    const value = arguments[0];
    const index = arguments[1];

    const size = arr.length;

    const swapTime = (size - index)
    arr.push(value)
    let pos = arr.length - 1;
    for (let i = 0; i <= swapTime; i++) {

        const temp = arr[pos];

        arr[pos] = arr[pos - 1];

        arr[pos - 1] = temp;

        pos--;



    }

}

const arr = [1, 2, 3, 4, 5]

arr.insertAtIndex(6, 6)

console.log(arr)