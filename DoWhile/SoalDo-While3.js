let password;
let valid = false;

// Tulis kode do-while loop di sini untuk validasi password
do {
    password = prompt("Buat password Anda:");

    if (password.length >= 6 && /\d/.test(password)) {
        valid = true;
        console.log("Password valid!");
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
    }

} while (!valid);

console.log("Password berhasil dibuat: " + password);