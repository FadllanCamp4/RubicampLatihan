function processOrder(namaItem, jumlah) {
    const HARGA_PER_ITEM = 15000;
    const subtotal = HARGA_PER_ITEM * jumlah;

    console.log("=== Detail Pesanan ===");
    console.log("Item: " + namaItem);
    console.log("Jumlah: " + jumlah);
    console.log("Harga per item: Rp " + HARGA_PER_ITEM);
    console.log("Subtotal: Rp " + subtotal);
    console.log("");

    return subtotal;
}

const totalBayar1 = processOrder("Nasi Goreng", 2);
const totalBayar2 = processOrder("Mie Ayam", 3);

console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));