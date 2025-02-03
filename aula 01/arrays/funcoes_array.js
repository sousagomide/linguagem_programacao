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





console.log(v4)




// concat - OK
// fill - OK
// filter - OK
// find - OK
// forEach - OK
// includes - OK
// indexOf - OK
// join - OK
// lastIndexOf
// map - OK
// pop
// push
// reduce - OK
// reverse
// slice
// sort
// splice
