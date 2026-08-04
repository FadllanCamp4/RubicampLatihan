let totalBelanja = 350000;

// Tulis kode if-else if statement di sini
if (totalBelanja >= 500000) {
    console.log("Total belanja: Rp " + totalBelanja);
    console.log("Diskon: 20%");
    console.log("Total bayar: Rp " + (totalBelanja - (totalBelanja * 20 / 100)));
} else if (totalBelanja >= 200000) {
    console.log("Total belanja: Rp " + totalBelanja);
    console.log("Diskon: 10%");
    console.log("Total bayar: Rp " + (totalBelanja - (totalBelanja * 10 / 100)));
} else if (totalBelanja >= 100000) {
    console.log("Total belanja: Rp " + totalBelanja);
    console.log("Diskon: 5%");
    console.log("Total bayar: Rp " + (totalBelanja - (totalBelanja * 5 / 100)));
}