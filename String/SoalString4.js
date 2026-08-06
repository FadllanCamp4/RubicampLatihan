// Tulis function searchInText di sini
function searchInText(text, searchTerm) {
    const firstIndex = text.indexOf(searchTerm);
    const found = text.includes(searchTerm);

    let count = 0;
    let position = firstIndex;

    while (position !== -1) {
        count++;
        position = text.indexOf(searchTerm, position + searchTerm.length);
    }

    return {
        found: found,
        firstIndex: firstIndex,
        count: count
    };
}

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));