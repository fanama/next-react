package variablesCors

import (
	"encoding/json"
	"fmt"
	"os"
)

func InitConfig() (conf Configuration, err error) {

	fmt.Println("ReadingFiles...")

	file, err := os.Open("conf/cors.json")
	if err != nil {
		return Create("conf/cors.json")
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&conf)
	if err != nil {
		return conf, err
	}

	return conf, err
}

func Create(fileName string) (conf Configuration, err error) {
	fmt.Println("CreatingFile...")

	file, err := os.Create(fileName)
	if err != nil {
		return conf, err
	}

	defer file.Close()

	fmt.Println("Enter your configuration---")
	fmt.Println("origin:")
	fmt.Scanln(&conf.Origin)
	fmt.Println("methods:")
	fmt.Scanln(&conf.Methods)
	fmt.Println("port:")
	fmt.Scanln(&conf.Port)

	encoder := json.NewEncoder(file)
	err = encoder.Encode(conf)
	if err != nil {
		return conf, err
	}

	return conf, err
}
