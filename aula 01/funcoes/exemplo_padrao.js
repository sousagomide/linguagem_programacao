function funcaoa(a, b, c) {
    return a + b + c
}

console.log(funcaoa(1, 2, 3))
console.log(funcaoa(1, 2))
console.log(funcaoa(1))

function funcaob(a, b = 0, c = 0) {
    return a + b + c
}

console.log(funcaob(1, 2, 3))
console.log(funcaob(1, 2))
console.log(funcaob(1))