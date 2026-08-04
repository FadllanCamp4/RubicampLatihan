// Tulis function transformArray di sini
function transformArray(arr, operations) {
    let transformed = [];
    let sum = 0;

    arr.forEach(function (item, index) {
        let hasil = (item * operations.multiply) + operations.add;

        transformed.push(hasil);

        if (operations.logEach) {
            console.log("Processing ke-" + (index + 1) + ": " + item + " -> " + hasil);
        }
    });

    transformed.forEach(function (item) {
        sum += item;
    });

    return {
        original: arr,
        transformed: transformed,
        stats: {
            processed: transformed.length,
            sum: sum,
            average: sum / transformed.length
        }
    };
}

let numbers = [1, 2, 4, 6, 9];

console.log(transformArray(numbers, {
    multiply: 2,
    add: 1,
    logEach: true
}));