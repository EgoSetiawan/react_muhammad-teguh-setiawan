let a = 5
let b = 'kampus merdeka'
const nama = 'budi'
let TerdafTar = true
let LengKap = [a,b,nama,TerdafTar]
let TakeArray = LengKap[2]

function perkenalan(){
    let asal = 'Indonesia'
    return console.log(
        'perkenalkan nama saya' +
        nama +
        'nomor urut' + 
        a + 
        'sekarang sedang mengikuti' +
        b +
        'berasal dari' +
        asal
    )
}

if (TerdafTar === true) {
    console.log(nama + 'terdaftar sebagai kegiatan kampus merdeka')
}

a = b
// nama = b;


//console.log("asal diakses = " + asal);
console.log(`Mengambil Index Array Ke-2 ${TakeArray}`)
console.log(`a adalah = ${a}`)
console.log(`b adalah = ${b}`)
perkenalan()