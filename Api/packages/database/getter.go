package database

import "gorm.io/gorm"

func GetTables(db *gorm.DB) (tables []string, err error) {

	err = db.Table("information_schema.tables").Select("table_name").Find(&tables).Error

	return tables, err
}
