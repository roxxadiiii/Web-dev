function calculateArithmetic(a, b, type) {
    if (type == "sum") {
        const value = sum(a, b);
        return value;
    }
    if (type == "sub") {
        const value = sub(a, b);
        return value;
    }
    if (type == "mul") {
        const value = mul(a, b);
        return value;
    }
    if (type == "div") {
        const value = div(a, b);
        return value;
    }
}

function sum(a, b) {
    return (a + b);
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const valAdd = calculateArithmetic(6, 4, "sum");
console.log("sum is " + valAdd);
const valSub = calculateArithmetic(10, 4, "sub");
console.log("Sub is " + valSub);
const valMul = calculateArithmetic(33, 4, "mul");
console.log("Mul is " + valMul);
const valDiv = calculateArithmetic(803, 4, "div");
console.log("div is " + valDiv);
