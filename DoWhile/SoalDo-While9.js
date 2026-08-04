let tahapInstalasi = ["Download file", "Extract file", "Install program", "Setup konfigurasi"];
let berhasil = false;
let percobaan = 0;
let cobaLagi;

// Tulis kode do-while loop di sini untuk simulasi instalasi
do {
    percobaan++;
    berhasil = true;

    console.log("=== PERCOBAAN INSTALASI " + percobaan + " ===");

    for (let i = 0; i < tahapInstalasi.length; i++) {
        let hasil = Math.floor(Math.random() * 2);

        if (hasil == 0) {
            console.log(tahapInstalasi[i] + "... berhasil");
        } else {
            console.log(tahapInstalasi[i] + "... GAGAL!");
            berhasil = false;
            break;
        }
    }

    if (!berhasil) {
        cobaLagi = prompt("Instalasi gagal! Coba lagi? (y/n):");
    }

} while (!berhasil && cobaLagi == "y");

if (berhasil) {
    console.log("Instalasi berhasil dalam " + percobaan + " percobaan!");
} else {
    console.log("Instalasi dibatalkan setelah " + percobaan + " percobaan.");
}