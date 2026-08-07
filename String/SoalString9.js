// Tulis function validateEmail di sini
const validateEmail = (email) => {
    if (typeof email !== "string") {
        throw new TypeError("Parameter 'email' harus berupa string.");
    }

    const cleanedEmail = email.trim();

    const checks = {
        hasAt: cleanedEmail.includes("@"),
        hasDot: cleanedEmail.indexOf(".") !== -1,
        validLength: cleanedEmail.length >= 5,
        noSpaces: cleanedEmail === email.trim()
    };

    return {
        valid: Object.values(checks).every(Boolean),
        email: cleanedEmail,
        checks
    };
};

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));