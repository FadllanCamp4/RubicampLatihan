// Tulis function manageQueue di sini

function manageQueue(arr, operations) {
    let result = [...arr];

    let enqueued = 0;
    let dequeued = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i].startsWith("enqueue:")) {
            let value = operations[i].split(":")[1];
            result.push(value);
            enqueued++;
        } else if (operations[i] == "dequeue") {
            result.shift();
            dequeued++;
        }
    }
    return {
        result: result,
        stats: {
            enqueued: enqueued,
            dequeued: dequeued,
            operations: operations.length
        }
    };
}