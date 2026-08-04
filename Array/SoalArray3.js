// Tulis function manageStack di sini

function manageStack(arr, operations) {
    let result = [...arr];
    let log = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i].startsWith("push:")) {
            let value = operations[i].split(":")[1];
            result.push(value);
            log.push("Added " + value);
        } else if (operations[i] == "pop") {
            let hapus = result.pop();
            log.push("Removed " + hapus);
        }
    }
    return {
        result: result,
        log: log
    };
}