let jenisKendaraan = "mobil";
let durasi = 3; // jam

// Tulis kode if-else if-else statement di sini
if (jenisKendaraan === "motor") {
    console.log("Jenis kendaraan: " + jenisKendaraan);
    console.log("Durasi parkir: " + durasi + " jam");
    console.log("Tarif per jam: Rp 2000");
    console.log("Total bayar: Rp " + (2000 * durasi));
} else if (jenisKendaraan === "mobil") {
    console.log("Jenis kendaraan: " + jenisKendaraan);
    console.log("Durasi parkir: " + durasi + " jam");
    console.log("Tarif per jam: Rp 5000");
    console.log("Total bayar: Rp " + (5000 * durasi));
} else if (jenisKendaraan === "truk") {
    console.log("Jenis kendaraan: " + jenisKendaraan);
    console.log("Durasi parkir: " + durasi + " jam");
    console.log("Tarif per jam: Rp 10000");
    console.log("Total bayar: Rp " + (10000 * durasi));
} else {
    console.log("Kendaraan tidak diizinkan");
}