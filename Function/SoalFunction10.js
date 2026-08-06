// Tulis function validateAndCalculateGrade di sini
function validateAndCalculateGrade(nama, nilai) {
    console.log("=== Hasil Penilaian ===");
    console.log("Nama: " + nama);

    if (nilai < 0 || nilai > 100) {
        console.log("Nilai: " + nilai + " (Tidak Valid - harus 0-100)");
        console.log("");

        return null;
    }

    let grade;

    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else if (nilai >= 60) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log("Nilai: " + nilai + " (Valid)");
    console.log("Grade: " + grade);
    console.log("");

    return grade;
}

// Test dengan berbagai nilai
const grade1 = validateAndCalculateGrade("Budi", 85);
const grade2 = validateAndCalculateGrade("Sari", 150);
const grade3 = validateAndCalculateGrade("Andi", 72);

console.log("Grade Budi: " + grade1);
console.log("Grade Sari: " + grade2);
console.log("Grade Andi: " + grade3);