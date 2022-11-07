items = ['computer', 'mouse', 'laptop', 'computer']

const uniqueArr = items.reduce((accumulator, item) => {
    if (!accumulator.includes(item)) {
        accumulator.push(item);
    }
    return accumulator;
}, []);

console.log(uniqueArr)