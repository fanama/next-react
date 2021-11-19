package auth

import (
	"encoding/json"
	"log"
	"os"
)

func init() {
	file, err := os.Open("conf/auth.json")

	if err != nil {
		file, err = os.Open("../../conf/auth.json")
	}
	if err != nil {
		return
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&Conf)
	if err != nil {
		log.Fatal(err)
	}
}
