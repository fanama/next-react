package variablesCors

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
)

func init() {

	fmt.Println("ReadingFiles...")

	file, err := os.Open("conf/cors.json")

	if err != nil {
		file, err = os.Open("../../conf/cors.json")
	}
	if err != nil {
		return
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&Cors)
	if err != nil {
		log.Fatal(err)
	}
}
