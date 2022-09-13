# Javascript

Rangkuman dari materi Javascript

# JavaScript
Javascript adalah bahasa pemrograman yang bisa membuat internet bekerja. Lebih lengkapnya Javascript adalah bahasa pemrograman yang ringan, bersifat dinamis, dan dapat diarahkan untuk oriented programming maupun functional programming.

### Javascript Variable Declaration
Pada javaScript memiliki 3 cara variable declaration:
1. var
2. let
3. const

Setiap variable memiliki perbedaan:

|               |Var               |Let               |Const             |
|---            |---               |---               |---               |
|Global Scope   |:white_check_mark:|:x:               |:x:               |
|Function scope |:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Redeclarable   |:white_check_mark:|:x:               |:x:               |
|Reassignment   |:white_check_mark:|:white_check_mark:|:x:               |
|Hoisting       |:white_check_mark:|:x:               |:x:               |
|Block Scope    |:x:               |:white_check_mark:|:white_check_mark:|

### JavaScript Value dan Reference
Javascript memiliki 2 tipe data yaitu:
* Primitive
    * Number
    * String
    * Boolean 
    * Undfined 
    * Null 
    * Symbol

* Non-Primitive
    * Array
    * Object
    * Function

Pass Value
    Value akan menyimpan diperangkat yang baru dan tidak akan menggantikan object yang sebelumnya dan value immutable

Pass References
    References menurukan nilai maka akan menyimpan diperangkat yang sama dan akan menggantikan object yang sebelumnya  dan Refreshment mutable

### JavaScript Destructuring and Spread
Destructuring mempermudah mengolah array dengan memasukkan nilai array pada variabel baru
Contoh:
```
const OBJ = { 1, 2 }
const { a, b } = OBJ

```
Nilai pada object dari awal tersalin pada variabel a sama dengan object b

Spread memasukan semua data pada variabel menurut saya spread juga bisa disamakan dengan concat
Contoh:
```
const ARRAY = [1, 2, 3];
const OBJ = { ...ARRAY };
```
### JavaScript Method
Method merupakan sebuah fungsi yang mempermudah dengan tipe object
1. Concat 
2. Map 
3. Foreach 
4. Slice
5. Filter
6. Reduce

### Javascript Flow
Saat program JavaScript dieksekusi itu dari atas ke bawah atau kiri ke kanan secara berurutan atau disebut juga synchronous, contoh flow :
* Looping (For, While, Do While)
* IF/Else statement (if/else,try cacth, continue, break)

### Javascript Function
Function adalah object dikarenakan memiliki properti dan method. Function dapat digunakan berulang kembali.

1. Function Declaration
```
function Hello( - sebagai param dari function - ){
    console.log ('HelloWorld')
}
dan dipanggil dengan Hello()
```
2.  Arrow Function
Membuat function menjadi lebih singkat dengan menggunakan tanda (=>) / arrow
```
const coba = ( - sebagai param dari function - ) => {
    console.log ('halo ini arrow function')
}
coba()
```
3. Express Function
Membuat function disimpan pada variabel
```
const coba_express = function express(- sebagai param dari function -){
    console.log ('halo ini express function')
}
coba_express()
```

### Javascript Synchronous - Async - Await
1. Synchronous mengeksekusi setiap perintah satu persatu sesuai dengan urutan kode line 
contoh pada js sendiri melakukan Synchronous
2. Asynchronous
Hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses biasanya digunakan dengan await
contoh :
```
console.log("Ini");
setTimeout(() => {
	console.log("Async");
}, 1000);
```
### Javascript Callback
Callback adalah sebuah fungsi yang di eksekusi di dalam fungsi lain yang memanggilnya.
contoh:
```
 function splitting(str) {
  return str.split(',').map(d => {
    return d.split('-')
  })
}

function meleeRangedGrouping (str) {
  const result = [[], []];
  splitting(str).forEach((d, i) => {
    if (d[1] === "Ranged") {
      result[0].push(d.shift())
    } else if (d[1] === "Melee") {
      result[1].push(d.shift())
    } 
  })
  return (str.length) ? result : [];
}
```
yang dimana fungsi splitting dipanggil kembali dan dieksekusi oleh function meleeRangedGrouping

### Javascript Promise
Pada dasarnya promise adalah sebuah objek yang memiliki properti dan method.
Then dan catch adalah 2 method promise yang nantinya akan kita gunakan untuk menangani hasil dari sebuah promise dan juga penggunaan promise agar tidak terjadinya callback hell
contoh promise:
```
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // expected output: 123
});
```
### Javascript Await
Sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promise selesai.
contoh :
```
function coba() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await coba();
  console.log(result);
  //output: "resolved"
}

asyncCall();
```

### Javascript Class
kumpulan variable dan method yang dipakai sebagai blueprint atau rancangan untuk membuat sebuah object
contoh :
```
// class parent
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return `I have a ${this.carname}`
  }
}
// class child
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return `${this.present()}, it is a ${this.model}`;
  }
}

const CAR = new Model("Ford", "Mustang");
console.log(CAR.show())
```

### Javascript DOM
DOM (Document Object Model) adalah API untuk HTML yang mempresentasikan halaman web pada suatu dokumen menjadi sebuah object.
DOM memiliki 3 Jenis yaitu 
1. Method Selector
2. Manipulation
3. Event