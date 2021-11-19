package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	jwtware "github.com/gofiber/jwt/v2"
	"gitlab.clirisgroup.com/templates/typescript-JWT/Api/packages/auth"
	_ "gitlab.clirisgroup.com/templates/typescript-JWT/Api/packages/database"
	"gitlab.clirisgroup.com/templates/typescript-JWT/Api/packages/router"
	"gitlab.clirisgroup.com/templates/typescript-JWT/Api/packages/variablesCors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: variablesCors.Cors.Origin,
		AllowMethods: variablesCors.Cors.Methods,
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

	app.Listen(":" + variablesCors.Cors.Port)
}
