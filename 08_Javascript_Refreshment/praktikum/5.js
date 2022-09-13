const Val = [1,2,3,4,5,6]
// With ES6
const NewVal = Val.map((newVal) => newVal * 2)
console.log(NewVal)
// Manual With Lopp
let vaLoop = [] 
let value = 1
for(let i = 0; i < val.length; i++){
    value = Val[i] * 2
    vaLoop.push(value)
}
console.log(vaLoop)