function analyzeObject(Obj) {
    return {
        propertyCount: Object.keys(Obj).length,
        keys: Object.keys(Obj),
        values: Object.values(Obj),
        isEmpty: Object.keys(Obj).length === 0
    };
}

let person = {name : "John", age : 25, city: "Jakarta"}
let empty = {};

console.log(analyzeObject(person));
console.log(analyzeObject(empty));