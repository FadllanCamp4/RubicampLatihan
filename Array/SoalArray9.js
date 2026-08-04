// Tulis function validateArrayData di sini
function validateArrayData(arr) {
    let allNumbers = arr.every(function (item) {
        return typeof item == "number";
    });

    let hasNulls = arr.some(function (item) {
        return item === null;
    });

    let hasUndefined = arr.some(function (item) {
        return item === undefined;
    });

    let numbers = arr.filter(function (item) {
        return typeof item == "number";
    });

    let strings = arr.filter(function (item) {
        return typeof item == "string";
    });

    let nulls = arr.filter(function (item) {
        return item === null;
    });

    let undefineds = arr.filter(function (item) {
        return item === undefined;
    });

    return {
        isValid: allNumbers && !hasNulls && !hasUndefined,
        allNumbers: allNumbers,
        hasNulls: hasNulls,
        hasUndefined: hasUndefined,
        stats: {
            total: arr.length,
            numbers: numbers.length,
            strings: strings.length,
            nulls: nulls.length,
            undefined: undefineds.length
        },
        cleaned: numbers
    };
}

let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];

console.log(validateArrayData(data1));
console.log(validateArrayData(data2));