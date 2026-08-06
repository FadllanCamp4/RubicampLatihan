// Tulis function analyzeCharacters di sini
function analyzeCharacters(text) {
    const characters = [];

    for (let i = 0; i < text.length; i++) {
        characters.push({
            char: text.charAt(i),
            position: i
        });
    }

    return characters;
}

console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));