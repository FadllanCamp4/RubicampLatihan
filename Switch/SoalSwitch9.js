let tombol = "SPACE";

// Tulis kode switch statement di sini
switch (tombol) {
    case "W":
        console.log("Tombol W: Karakter maju!");
        break;
    case "S":
        console.log("Tombol S: Karakter mundur!");
        break;
    case "A":
        console.log("Tombol A: Karakter bergerak ke kiri!");
        break;
    case "D":
        console.log("Tombol D: Karakter bergerak ke kanan!");
        break;
    case "SPACE":
        console.log("Tombol SPACE: Karakter melompat!");
        break;
    case "ESC":
        console.log("Tombol ESC: Game dijeda!");
        break;
    default:
        console.log("Tombol tidak valid");
}