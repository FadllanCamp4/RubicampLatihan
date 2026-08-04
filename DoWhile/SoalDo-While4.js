let dadu;
let mainLagi;
let totalSkor = 0;

// Tulis kode do-while loop di sini untuk game dadu
do {
    console.log("Melempar dadu...");

    dadu = Number(prompt("Masukkan hasil dadu (1-6):"));

    console.log("Hasil: " + dadu);

    totalSkor += dadu;

    if (dadu == 6) {
        console.log("JACKPOT! Bonus lemparan!");
    }

    console.log("Total skor: " + totalSkor);

    mainLagi = prompt("Main lagi? (y/n):");

} while (mainLagi == "y");

console.log("Game selesai! Total skor: " + totalSkor);