// Tulis function getStringInfo di sini
function getStringInfo(text) {
    const stringInfo = {
        length: text.length,
        first: text.charAt(0),
        last: text.charAt(text.length - 1)
    };

    return stringInfo;
}

console.log(getStringInfo("Hello"));
console.log(getStringInfo("JavaScript"));
console.log(getStringInfo("A"));