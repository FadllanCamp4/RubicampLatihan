// Tulis function sumAllNumbers di sini
function sumAllNumber(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// Panggil function dengan jumlah parameter berbeda
let total1 = sumAllNumber(1, 2, 3);
let total2 = sumAllNumber(5, 10, 15, 20);
let total3 = sumAllNumber(2, 4, 6, 8, 10);

console.log("Total(1,2,3): " + total1);
console.log("Total(5,10,15,20): " + total2);
console.log("Total(2,4,6,8,10): " + total3);