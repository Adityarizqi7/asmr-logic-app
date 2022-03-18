// Mungkin aku bikin program logika aja, entar tebak aja programnya

// OOP JS

class Sequence{

    constructor(point) {
        this.point = point
    }

    // Logikanya angka sekarang di jumlahkan dengan angka sebelumnya kemudian hasilnya di posisikan didepan kedua angka tersebut

    display() {

        let resultSeq = []

        let n = 1;
        let n_1 = 1;
        let n_2 = 0;

        // Bentar mikir ges
        // Bentar ges
        // Looping sampa batas inputan
        for(let i = 0; i < this.point; i++) {
            
            resultSeq.push(n);

            n = n_1 + n_2;
            n_2 = n_1;
            n_1 = n;
        }

        // Udah bener ya ges itu

        return resultSeq;
    }

}

// Instance Object From Class Sequence
const call = new Sequence(11);
console.info(call.display())