package main

import (
	"fmt"

	_ "github.com/fanama/next-react/Api/packages/database"
	"github.com/fanama/next-react/Api/utils"
)

func main() {
	// err := server.Run()

	// if err != nil {
	// 	panic(err)
	// }

	res, err := utils.Create("test.json")

	if err != nil {
		panic(err)
	}

	fmt.Println("result : ", res)
}
