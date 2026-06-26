let arr = [1, 2, 3, 4, 5];
const output = arr.reduce((prev, currentValue) => {
    return prev + currentValue;
});
console.log(output);