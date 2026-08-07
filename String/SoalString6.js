// Tulis function processWords di sini
const processWords = (sentence) => {
    if (typeof sentence !== "string") {
        throw new TypeError("Parameter 'sentence' harus berupa string.");
    }

    const words = sentence.trim().split(/\s+/);

    return {
        words,
        count: words.length,
        reversed: [...words].reverse().join(" ")
    };
};

console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));