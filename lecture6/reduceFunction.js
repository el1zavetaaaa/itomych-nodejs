const reducer = (arr, reduceCallback, initialValue) => {
    let acc = initialValue;

    for (let item in arr) {
        let currentItem = arr[item];
        acc = reduceCallback(acc, currentItem);
    }

    return acc;
}

array = [1, 2, 3]

const sum = reducer(array, (accumulator, currentVal) => accumulator + currentVal, 0)
console.log(sum)