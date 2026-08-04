// Tulis function aggregateArray di sini
function aggregateArray(arr) {
    let original = [...arr];

    if (typeof arr[0] == "number") {
        let sum = arr.reduce(function (total, item) {
            return total + item;
        }, 0);

        let product = arr.reduce(function (total, item) {
            return total * item;
        }, 1);

        let max = arr.reduce(function (besar, item) {
            return item > besar ? item : besar;
        });

        let min = arr.reduce(function (kecil, item) {
            return item < kecil ? item : kecil;
        });

        let sortedAsc = [...arr].sort(function (a, b) {
            return a - b;
        });

        let sortedDesc = [...arr].sort(function (a, b) {
            return b - a;
        });

        return {
            original: original,
            sum: sum,
            product: product,
            max: max,
            min: min,
            sortedAsc: sortedAsc,
            sortedDesc: sortedDesc
        };
    } else {
        let concatenated = arr.reduce(function (hasil, item) {
            return hasil + item;
        }, "");

        let longest = arr.reduce(function (terpanjang, item) {
            return item.length > terpanjang.length ? item : terpanjang;
        });

        let shortest = arr.reduce(function (terpendek, item) {
            return item.length < terpendek.length ? item : terpendek;
        });

        let sortedAsc = [...arr].sort();

        let sortedDesc = [...arr].sort().reverse();

        return {
            original: original,
            concatenated: concatenated,
            longest: longest,
            shortest: shortest,
            sortedAsc: sortedAsc,
            sortedDesc: sortedDesc
        };
    }
}

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));