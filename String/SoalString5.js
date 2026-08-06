// Tulis function extractText di sini
function extractText(text, start, end) {
    const success = start >= 0 && end <= text.length && start < end;

    if (!success) {
        return {
            result: "",
            success: false,
            original: text
        };
    }

    return {
        result: text.substring(start, end),
        success: true,
        original: text
    };
}

console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));