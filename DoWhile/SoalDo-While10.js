let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;

// Tulis kode do-while loop di sini untuk simulasi antrian bank
do {
    if (antrian.length > 0) {
        let nasabah = antrian.shift();

        console.log("Melayani nasabah: " + nasabah);
        nasabahDilayani++;

        if (antrian.length > 0) {
            console.log("Sisa antrian: " + antrian.length + " orang");
        } else {
            console.log("Antrian kosong.");
        }
    }

    if (antrian.length == 0) {
        adaNasabahBaru = prompt("Ada nasabah baru yang datang? (y/n):");

        if (adaNasabahBaru == "y") {
            let nama = prompt("Nasabah baru:");
            antrian.push(nama);
        }
    }

} while (antrian.length > 0 || adaNasabahBaru == "y");

console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);