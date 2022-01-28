package server

import (
	"log"

	"github.com/fanama/next-react/Api/packages/variablesCors"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func Run() (err error) {

	app := routes()

	return app.Listen("")
}

func routes() *fiber.App {

	config, err := variablesCors.InitConfig()

	if err != nil {
		log.Fatal(err)
	}

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: config.Origin,
		AllowMethods: config.Methods,
	}))

	return app
}
