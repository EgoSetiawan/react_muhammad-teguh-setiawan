class Kendaraan {
    constructor(){
        this.totalRoda = 0;
        this.kecepatanPerJam = 0;
    }
}

class Mobil extends Kendaraan {
    constructor(){
        super()
    }

    tambahKecepatan(kecepatanBaru){
       return this.kecepatanPerJam += kecepatanBaru
    }

    berjalan()  {
        return this.tambahKecepatan(10);
    }

    setRoda(totalRoda){
        return this.totalRoda = totalRoda
    }

    setKecepatanPerJam(kecepatanPerJam){
        return this.kecepatanPerJam = kecepatanPerJam
    }
}

const mobilCepat = new Mobil()
mobilCepat.setRoda(4)
mobilCepat.setKecepatanPerJam(0)
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();

const mobilLamban = new Mobil()
mobilLamban.setRoda(4)
mobilLamban.setKecepatanPerJam(0)
mobilLamban.berjalan();

console.log(`mobilCepat = ${JSON.stringify(mobilCepat)}`)
console.log(`mobilLamban = ${JSON.stringify(mobilLamban)}`)