function prime(num) {
  let check = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      check++;
    }
  }
  if (check % 2 === 0) {
    return console.log(`Angka ${num} Bukan Bilangan prima`);
  } else {
    return console.log(`Angka ${num} Bilangan Prima`);
  }
}
prime(73);
