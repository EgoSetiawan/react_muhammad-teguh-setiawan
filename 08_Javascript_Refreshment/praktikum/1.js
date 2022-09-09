let numberA = 5;
let kampusMerdeka = "kampus merdeka";
const NAMA = "budi";
let TerdafTar = true;
let LengKap = [a, b, NAMA, TerdafTar];
let TakeArray = LengKap[2];

function perkenalan() {
  let asal = "Indonesia";
  return console.log(
    "perkenalkan nama saya" +
      NAMA +
      "nomor urut" +
      a +
      "sekarang sedang mengikuti" +
      b +
      "berasal dari" +
      asal
  );
}

if (TerdafTar === true) {
  console.log(NAMA + "terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

//console.log("asal diakses = " + asal);
console.log(`Mengambil Index Array Ke-2 ${TakeArray}`);
console.log(`a adalah = ${numberA}`);
console.log(`b adalah = ${kampusMerdeka}`);
perkenalan();
