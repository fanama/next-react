package database

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func init() {

	var conf Configuration
	file, err := os.Open("conf/database.json")

	if err != nil {
		file, err = os.Open("../../conf/database.json")
	}
	if err != nil {
		return
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&conf)

	if err != nil {
		log.Println(err)
		return
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local", conf.UserDb, conf.PasswordDb, conf.HostDb, conf.PortDb, conf.DbName)
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Println(err)
		return
	}
}
