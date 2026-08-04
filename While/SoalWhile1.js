let angka;

// Tulis kode while loop di sini untuk validasi input
while (true) {
    angka = Number(prompt("Masukkan angka (1-10):"));

    if (angka >= 1 && angka <= 10) {
        break;
    }

    console.log("Input tidak valid, masukkan angka 1-10");
}

console.log("Angka valid yang dimasukkan: " + angka);