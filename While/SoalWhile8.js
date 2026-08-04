let teks = "Hello world";
let langkah = 0;

//Tulis kode while loop disini untuk menghapus spasi awal
while (teks[0]==" "){
    teks = teks.substring(1);
    langkah++;

    console.log("Langkah " + langkah + ": '" + teks + "'");
}

console.log("Hasil akhir: '" + teks + "'");
console.log("Total spasi yang dihapus : " + langkah);