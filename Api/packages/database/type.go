package database

type Configuration struct {
	UserDb     string `json:"USER_DB"`
	PasswordDb string `json:"PASSWORD_DB"`
	PortDb     int    `json:"PORT_DB"`
	DbName     string `json:"DB_NAME"`
	HostDb     string `json:"HOST_DB"`
}
