// Tulis function replaceText di sini
const replaceText = (text, oldText, newText) => {
    if (
        typeof text !== "string" ||
        typeof oldText !== "string" ||
        typeof newText !== "string"
    ) {
        throw new TypeError("Semua parameter harus berupa string.");
    }

    const replacements = oldText === ""
        ? 0
        : text.split(oldText).length - 1;

    return {
        result: text.replaceAll(oldText, newText),
        replacements,
        original: text
    };
};

console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));