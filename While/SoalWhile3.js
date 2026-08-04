let pilihan;

// Tulis kode while loop di sini untuk sistem menu
while (pilihan != 4) {
    console.log("=== MENU KALKULATOR ===");
    console.log("1. Tambah");
    console.log("2. Kurang");
    console.log("3. Kali");
    console.log("4. Keluar");

    pilihan = Number(prompt("Pilih menu (1-4):"));

    if (pilihan == 1) {
        console.log("Anda memilih Tambah");
    } else if (pilihan == 2) {
        console.log("Anda memilih Kurang");
    } else if (pilihan == 3) {
        console.log("Anda memilih Kali");
    }
}

console.log("Terima kasih telah menggunakan program!");