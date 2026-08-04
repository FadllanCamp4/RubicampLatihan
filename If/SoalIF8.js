let berat = 70; // kg
let tinggi = 1.75; // meter

// Hitung BMI terlebih dahulu
let bmi = berat / (tinggi * tinggi);

// Tulis kode if-else if-else statement di sini
if (bmi < 18.5) {
    console.log("BMI: " + bmi.toFixed(2));
    console.log("Kategori: Underweight");
} else if (bmi < 25) {
    console.log("BMI: " + bmi.toFixed(2));
    console.log("Kategori: Normal");
} else if (bmi < 30) {
    console.log("BMI: " + bmi.toFixed(2));
    console.log("Kategori: Overweight");
} else {
    console.log("BMI: " + bmi.toFixed(2));
    console.log("Kategori: Obese");
}