const math = require("mathjs")

// Demonstração de Cadeias de Markov

const matriz = [
     [.90, .075, .025],
     [.15, .800, .050],
     [.25, .250, .500],
]
const matrizI = [
     [1, 0, 0],
     [0, 1, 0],
     [0, 0, 1],
]
let m = []
let m1 = []
m.push(math.multiply(math.multiply(matriz, matriz), matriz))
const flat = math.flatten(m)
const redm = math.reshape(flat, [3, 3])
m1.push(math.multiply(redm, matrizI))
const middleRow = math.subset(m1[0], math.index(1, math.range(0, 3)));

console.log(m)
console.log(middleRow)
