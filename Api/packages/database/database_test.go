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
