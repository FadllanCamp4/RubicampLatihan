// Tulis function arrayAnalyzer di sini
function arrayAnalyzer(arr) {
    let sum = arr.reduce(function (total, item) {
        return total + item;
    }, 0);

    let average = Number((sum / arr.length).toFixed(2));

    let min = arr.reduce(function (kecil, item) {
        return item < kecil ? item : kecil;
    });

    let max = arr.reduce(function (besar, item) {
        return item > besar ? item : besar;
    });

    let sortedAsc = [...arr].sort(function (a, b) {
        return a - b;
    });

    let sortedDesc = [...sortedAsc].reverse();

    let median;
    if (sortedAsc.length % 2 == 0) {
        let tengah1 = sortedAsc[sortedAsc.length / 2 - 1];
        let tengah2 = sortedAsc[sortedAsc.length / 2];
        median = (tengah1 + tengah2) / 2;
    } else {
        median = sortedAsc[Math.floor(sortedAsc.length / 2)];
    }

    let mode = null;

    let doubled = arr.map(function (item) {
        return item * 2;
    });

    let squared = arr.map(function (item) {
        return item * item;
    });

    let filtered = arr.filter(function (item) {
        return item > average;
    });

    let reversed = [...arr].reverse();

    let allNumbers = arr.every(function (item) {
        return typeof item == "number";
    });

    let hasNegatives = arr.some(function (item) {
        return item < 0;
    });

    let hasZeros = arr.includes(0);

    let hasDuplicates = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
            hasDuplicates = true;
            break;
        }
    }

    return {
        original: arr,
        length: arr.length,
        statistics: {
            sum: sum,
            average: average,
            min: min,
            max: max,
            median: median,
            mode: mode
        },
        transformations: {
            doubled: doubled,
            squared: squared,
            filtered: filtered,
            reversed: reversed
        },
        sorted: {
            ascending: sortedAsc,
            descending: sortedDesc
        },
        validation: {
            allNumbers: allNumbers,
            hasNegatives: hasNegatives,
            hasZeros: hasZeros,
            hasDuplicates: hasDuplicates
        }
    };
}

let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);

console.log(result);