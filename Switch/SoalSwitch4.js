let bulan = 2;

// Tulis kode switch statement di sini
switch (bulan) {
    case 1:
        console.log("Bulan ke-1 (Januari) memiliki 31 hari");
        break;
    case 2:
        console.log("Bulan ke-2 (Februari) memiliki 28 hari");
        break;
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Bulan ke-" + bulan + " memiliki 31 hari");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Bulan ke-" + bulan + " memiliki 30 hari");
        break;
    default:
        console.log("Bulan tidak valid");
}