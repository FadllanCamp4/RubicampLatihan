let angka;
let lanjut;
// Tulis kode do-while loop di sini

do {
    angka = Number(prompt("Masukkan angka:"));
    console.log("Kuadrat dari " + angka + " adalah: " + (angka * angka));

    lanjut = prompt("Apakah ingin melanjutkan? (y/n):");
} while (lanjut == "y");

console.log("Terima kasih telah menggunakan program!");