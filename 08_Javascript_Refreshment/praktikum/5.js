const val = [1,2,3,4,5,6]
// With ES6
const NewVal = val.map((newVal) => newVal * 2)
console.log(NewVal)
// Manual With Lopp
let vaLoop = [] 
let value = 1
for(let i = 0; i < val.length; i++){
    value = val[i] * 2
    vaLoop.push(value)
}
console.log(vaLoop)