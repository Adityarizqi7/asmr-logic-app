package main

import "fmt"

func main() {

	// Jadi kita akan membuat program fibonacci dengan golang

	// Logikanya ialah menjumlahkan angka sekarang dan angka sebelumnya ,kemudian hasilnya di posisikan setelah kedua angka tersebut

	// Misalnya nilai awal ialah 1
	// Hasil : 1
	// 0 + 1
	// Hasil : 1 1
	// 1 + 1
	// Hasil : 1 1 2, dan seterusnya

	var result []int

	n := 1
	n1 := 1
	n2 := 0

	point := 11

	for i := 0; i < point; i++ {

		//Kita push ke dalam array hasilnya
		result = append(result, n)

		n = n1 + n2
		n2 = n1 //n1 bakal menjadi n2 nya atau angak sebelumnya
		n1 = n // n bakal menjadi n1 nya atau angka sekarang

	}

	// Kita panggil array "result" nya
	fmt.Println(result)

	// Oke saya rasa cukup sekian tutorialnya semoga paham yaa

}