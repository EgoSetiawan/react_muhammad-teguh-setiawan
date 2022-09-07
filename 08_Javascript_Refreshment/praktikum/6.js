const arr = [1.5,2.56,5.1,12.33]
const NewVal = arr.map((newVal) => Math.round(newVal))
console.log(NewVal)

console.log("Ini");
setTimeout(() => {
	console.log("Async");
}, 1000);
