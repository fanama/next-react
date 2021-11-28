package database

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/fanama/next-react/Api/packages/database/types"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func InitMysqlDB() (address gorm.DB, err error) {

	var db *gorm.DB

	var conf types.Configuration
	file, err := os.Open("conf/database.json")

	if err != nil {
		file, err = os.Open("../../conf/database.json")
	}
	if err != nil {
		return *db, err
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&conf)

	if err != nil {
		return *db, err
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local", conf.UserDb, conf.PasswordDb, conf.HostDb, conf.PortDb, conf.DbName)
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	return *db, err
}
