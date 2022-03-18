package main

import "fmt"

func main() {

	// Kita bikin program yang sama kayak tadi aja, Mantappppp

	var resultSeq []int

	n:=1
	n1:=1
	n2:=0

	var point int = 6

	for i := 0; i < point; i++ {

		resultSeq = append(resultSeq, n)

		n = n1 + n2
		n2 = n1
		n1 = n
	}
	fmt.Print(resultSeq)
}