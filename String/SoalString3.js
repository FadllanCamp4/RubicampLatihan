// Tulis function convertCase di sini
function convertCase(text, mode) {
    if (mode === "upper") {
        return text.toUpperCase();
    }

    if (mode === "lower") {
        return text.toLowerCase();
    }

    if (mode === "title") {
        const words = text.toLowerCase().split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        return words.join(" ");
    }

    return text;
}

console.log(convertCase("hello world", "upper"));
console.log(convertCase("HELLO WORLD", "lower"));
console.log(convertCase("hello world", "title"));