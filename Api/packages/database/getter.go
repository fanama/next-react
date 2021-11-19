package database

func GetTables() (tables []string, err error) {

	err = DB.Table("information_schema.tables").Select("table_name").Find(&tables).Error

	return tables, err
}
