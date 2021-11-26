package database

func CreateUserTable() (err error) {

	err = DB.Table("users").AutoMigrate(&User{})

	return err
}

func CreateRoleTable() (err error) {

	err = DB.Table("role_table").AutoMigrate(&Role{})

	return err
}
