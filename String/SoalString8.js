// Tulis function cleanAndFormat di sini
const cleanAndFormat = (text, width) => {
    if (typeof text !== "string") {
        throw new TypeError("Parameter 'text' harus berupa string.");
    }

    if (!Number.isInteger(width) || width < 0) {
        throw new TypeError("Parameter 'width' harus berupa bilangan bulat positif.");
    }

    const cleaned = text.trim().replace(/\s+/g, " ");

    const totalPadding = Math.max(width - cleaned.length, 0);
    const leftPadding = Math.floor(totalPadding / 2);
    const rightPadding = totalPadding - leftPadding;

    return {
        cleaned,
        padded: cleaned
            .padStart(cleaned.length + leftPadding)
            .padEnd(width),
        length: width
    };
};


console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));