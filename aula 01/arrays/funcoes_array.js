const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = a1.concat(a2)
// [1, 2, 3, 4, 5, 6]

const a4 = a3.fill(0, 3, 5)
// [1, 2, 3, 0, 0, 0]

const v1 = a3.find((e) => e % 3 == 0)
// 3

//a3.forEach((e) => console.log(e))

const v2 = a3.includes(10)
// false

const v3 = a3.indexOf(2)
// 1

const v4 = a3.join()
// 1,2,3,0,0,6

const v5 = a3.lastIndexOf(6)
// 5

a3.pop()
// [1, 2, 3, 0, 0]

a3.push(13)
// [1, 2, 3, 0, 0, 13]

const v6 = a3.reverse()
// [13, 0, 0, 3, 2, 1]

const v7 = a3.slice(1, 3)
// [0, 0]

const v8 = a3.sort()
// [0, 0, 1, 13, 2, 3]

const v9 = a3.toSpliced(1, 0, 69)
// [0, 69, 0, 1, 13, 2, 3]

const v10 = a3.toSpliced(4, 2, 79)
// [0, 0, 1, 13, 79]