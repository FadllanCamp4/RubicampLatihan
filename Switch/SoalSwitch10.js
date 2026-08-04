let bahasa = "EN";

// Tulis kode switch statement di sini
switch (bahasa) {
    case "id":
    case "ID":
        console.log("Language: Bahasa Indonesia");
        console.log("Selamat datang! Ada yang bisa kami bantu?");
        break;

    case "en":
    case "EN":
        console.log("Language: English");
        console.log("Welcome! How can we help you today?");
        break;

    case "jp":
    case "JP":
        console.log("Language: Japanese");
        console.log("ようこそ！");
        break;

    case "kr":
    case "KR":
        console.log("Language: Korean");
        console.log("환영합니다!");
        break;

    default:
        console.log("Language not supported");
}