// Tulis function searchArray di sini
function searchArray(arr, criteria) {
    let found;
    let filtered = [];

    if (criteria.condition == "greater") {
        found = arr.find(function (item) {
            return item > criteria.value;
        });

        filtered = arr.filter(function (item) {
            return item > criteria.value;
        });
    } else if (criteria.condition == "contains") {
        found = arr.find(function (item) {
            return item.includes(criteria.value);
        });

        filtered = arr.filter(function (item) {
            return item.includes(criteria.value);
        });
    }

    return {
        found: found,
        filtered: filtered,
        includes: arr.includes(criteria.value),
        count: filtered.length
    };
}

let numbers = [1, 5, 10, 15, 20];
console.log(searchArray(numbers, { type: "number", value: 10, condition: "greater" }));

let words = ["apple", "banana", "cherry"];
console.log(searchArray(words, { type: "string", value: "an", condition: "contains" }));