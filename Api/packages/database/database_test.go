package database

import (
	"testing"
)

func TestInitDB(t *testing.T) {

	_, err := InitMysqlDB()

	if err != nil {
		t.Errorf("error : %v", err)
	}

}

func TestDatabase(t *testing.T) {

	db, _ := InitMysqlDB()

	_, err := GetTables(&db)

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}

func TestCreateUser(t *testing.T) {

	db, _ := InitMysqlDB()

	err := CreateUserTable(&db)

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}

func TestCreateRole(t *testing.T) {

	db, _ := InitMysqlDB()

	err := CreateRoleTable(&db)

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}
