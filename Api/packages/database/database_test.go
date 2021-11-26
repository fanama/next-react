package database

import (
	"testing"
)

func TestDatabase(t *testing.T) {

	_, err := GetTables()

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}

func TestCreateUser(t *testing.T) {

	err := CreateUserTable()

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}

func TestCreateRole(t *testing.T) {

	err := CreateRoleTable()

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}
