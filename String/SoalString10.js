// Tulis function textAnalyzer di sini
const textAnalyzer = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("Parameter 'text' harus berupa string.");
    }

    const cleaned = text.trim();
    const words = cleaned.split(/\s+/);

    const characters = [...cleaned];

    const uppercaseCount = characters.filter(
        (char) => char >= "A" && char <= "Z"
    ).length;

    const lowercaseCount = characters.filter(
        (char) => char >= "a" && char <= "z"
    ).length;

    const sentenceCount = cleaned
        .split(/[.!?]+/)
        .filter((sentence) => sentence.trim().length > 0)
        .length;

    const longestWord = words.reduce((longest, word) =>
        word.length > longest.length ? word : longest
    );

    const shortestWord = words.reduce((shortest, word) =>
        word.length < shortest.length ? word : shortest
    );

    const hasNumbers = [...cleaned].some((char) => char >= "0" && char <= "9");

    const hasSpecialChars = [...cleaned].some(
        (char) => !/[a-zA-Z0-9\s]/.test(char)
    );

    return {
        original: text,
        cleaned,
        stats: {
            totalLength: text.length,
            cleanedLength: cleaned.length,
            wordCount: words.length,
            sentenceCount,
            uppercaseCount,
            lowercaseCount
        },
        words,
        longestWord,
        shortestWord,
        hasNumbers,
        hasSpecialChars
    };
};

let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);