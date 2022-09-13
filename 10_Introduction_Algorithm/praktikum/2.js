const tombolMenyala = (num) => {
  let buttonCount = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      buttonCount++;
    }
  }
  if (buttonCount % 2 === 0) {
    return console.log(`Menekan tombol sebanyak ${num} lampu menyala`);
  } else {
    return console.log(`Menekan tombol sebanyak ${num} lampu mati`);
  }
};

tombolMenyala(79);
tombolMenyala(4);
