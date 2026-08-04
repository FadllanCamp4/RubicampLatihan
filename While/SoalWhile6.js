let prompt = require("prompt-sync")()
let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;

//Tulis kode while loop disini untuk validasi password
while (percobaan < maxPercobaan && !berhasil) {
    password = prompt("Masukkan password:");

    if (password == "admin123") {
        berhasil = true;
    } else {
        percobaan++;
        console.log("password salah. Sisa percobaan: " + (maxPercobaan - percobaan));
    }
}
if (berhasil) {
    console.log("Login berhasil!");
} else {
    console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
}