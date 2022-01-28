package utils

import (
	"encoding/json"
	"fmt"
	"os"
)

func Create(fileName string) (conf map[string]string, err error) {
	fmt.Println("CreatingFile...")

	conf = map[string]string{}

	file, err := os.Create(fileName)
	if err != nil {
		return conf, err
	}

	defer file.Close()
	var number int
	fmt.Println("Enter the number of parameter  :")
	fmt.Scanln(&number)

	for i := 0; i < number; i++ {
		var name string
		var value string
		fmt.Println("parameter ", i+1, " --------------- ")
		fmt.Print("name : ")
		fmt.Scanln(&name)
		fmt.Print(name, ": ")
		fmt.Scanln(&value)
		conf[name] = value

	}

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "	")
	err = encoder.Encode(conf)
	if err != nil {
		return conf, err
	}

	return conf, err
}
