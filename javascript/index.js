// Oke Guys, saya akan membagikan tutorial  cara embuat program fibonacci

// Logikanya adalah menumlahkan angka sekarang dengan angka sebelumnya kemudian hasilnya di posisikan setelah angka kedua tersebut.

// Misalnya, awalnya 1
// 0 + 1
//  1 1
//  1 + 1
// 1 1 2, dan seterusnya

class Sequence {

    
    constructor(point) {
        this.point = point
    }

    // Membuat function untuk menjalakan logikanya menampilkan hasilnya

    display() {

        let result = []

        // Looping untuk show the result

        let n = 1
        let n1 = 1
        let n2 = 0

        for(let i = 0; i < this.point; i++) {

            result.push(n);

            n = n1 + n2
            n2 = n1 // Posisi dari n2 akan diambil dari nilai n1 sebelumnya
            n1 = n // dan posisi n1 akan diambil dari hasil penjumlahannya
        }

        return result;
    }
}

// Instance object dari class Sequence
const fibonacci = new Sequence(11)
console.log(fibonacci.display()) 