package main

import "fmt"

func main() {

	// Oke teman-teman jadi saya akan membuat program fibonacci menggunakan Go atau Golang
	// Logikanya ialah dengan menjumlahkan angka sekarang dengan angka sebelumnya kemudian hasilnya akan di posisikan setelah kedua angka tersebut

	var result []int

	n := 1
	n1 := 1 
	n2 := 0

	// Fibonacci contohnya
	// Nilai awal 1
	// 1
	// kemudian 0 + 1
	// 1 1
	// kemudian 1 + 1
	// 1 1 2. dan seterusnya

	point := 11

	for i := 0; i < point; i++ {

		result = append(result, n)

		n = n1 + n2
		n2 = n1
		n1 = n
	}

	fmt.Println(result)

}