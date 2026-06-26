let arr = [7, 12, 23, 44, 5];
const output = arr.reduce((prev, currentValue) => {
    return prev < currentValue ? prev : currentValue;
});
console.log(output);