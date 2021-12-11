package main

import (
	"fmt"
	"log"

	"github.com/fanama/next-react/Api/packages/auth"
	_ "github.com/fanama/next-react/Api/packages/database"
	"github.com/fanama/next-react/Api/packages/router"
	"github.com/fanama/next-react/Api/packages/variablesCors"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	jwtware "github.com/gofiber/jwt/v2"
)

func main() {
	config,err := variablesCors.InitConfig()

	if err != nil {
		log.Fatal(err)

	}

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: config.Origin,
		AllowMethods: config.Methods,
	}))

	app.Post("/auth", router.Login)

	// JWT Middleware
	fmt.Println(auth.Conf.JwtSecret)
	app.Use(jwtware.New(jwtware.Config{
		SigningKey: []byte(auth.Conf.JwtSecret),
	}))

	app.Get("/route2", func(c *fiber.Ctx) error {
		return c.SendString("on est sur la route 2")
	})

	app.Listen(":" + config.Port)
}
